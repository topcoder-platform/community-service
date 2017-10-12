/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */

/**
 * This file maps the defined routes to the server app.
 * @author TCSCODER
 * @version 1.0
 */
/* eslint no-param-reassign: ["error", { "props": false }] */

import scoreboardRoutes from './tco/scoreboard';


const routes = [];
routes.push(scoreboardRoutes);


module.exports = routes;
