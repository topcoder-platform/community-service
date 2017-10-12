import _ from 'lodash';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';


const app = express();

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


/**
 * Wrap function to standard express function with catch
 * @param {Function} fn the async function
 * @returns {Function} the wrapped function
 */
function catchAsyncErrors(fn) {
  if (_.isArray(fn)) {
    return fn.map(catchAsyncErrors);
  }

  return (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
      routePromise.catch(err => next(err));
    }
  };
}
/**
 * Configure all routes for express app
 * @param app the express app
 */
// Load all routes
routes.forEach((route) => {
  _.each(route, (verbs, path) => {
    _.each(verbs, (def, verb) => {
      let actions = [
        async function (req, res, next) { // eslint-disable-line
          req.signature = `${def.controller}#${def.method}`;
          await next();
        },
      ];
      const controllerPath = `./controllers/${def.controller}`;
      const method = require(controllerPath)[def.method]; // eslint-disable-line

      if (!method) {
        throw new Error(`${def.method} is undefined`);
      }
      if (def.middleware && def.middleware.length > 0) {
        actions = actions.concat(def.middleware);
      }

      actions.push(method);
      app[verb](`${path}`, catchAsyncErrors(actions));
    });
  });
});

// console.log(app._router.stack);
/* Catches 404 and forwards it to error handler. */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* Error handler. */
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  let errorResponse = null;
  const status = err.isJoi ? 400 : err.httpStatus || err.status || 500;

  if (err.isJoi && _.isArray(err.details)) {
    _.map(err.details, (e) => {
      if (e.message) {
        if (!errorResponse) {
          errorResponse = e.message;
        } else {
          errorResponse += `, ${e.message}`;
        }
      }
    });
  }
  errorResponse = errorResponse || err.message || 'Internal Server Error';

  /* Sets locals. Errors are provided only in dev. */
  _.assign(res, {
    locals: {
      error: req.app.get('env') === 'development' ? err : {},
      message: err.message,
    },
  });
  // console.error(err);
  /* Returns the error page. */
  res.status(status).send(errorResponse);
});

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  // console.log('Starting port on PORT: %d', port);
});

export default server;
