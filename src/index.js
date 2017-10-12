#!/usr/bin/env node

/* App startup script. */

/* Enables Babel for the server-side code (with exception of this very file). */
require('babel-register')({
  ignore: /node_modules\/(?!appirio-tech.*|topcoder|tc-)/,
});

/* Runs the ExpressJS startup script. */
require('./app');
