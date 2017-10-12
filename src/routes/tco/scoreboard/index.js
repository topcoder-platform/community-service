/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */
/**
 * Contains all routes for the scoreboard API
 *
 * @author TCSCODER
 * @version 1.1
 */

import auth from 'utils/auth';

module.exports = {
  '/scoreboard/challenges/:id': {
    put: { controller: 'tco/scoreboard/ChallengeController', method: 'update', middleware: [auth()] },
    get: { controller: 'tco/scoreboard/ChallengeController', method: 'get' },
    delete: { controller: 'tco/scoreboard/ChallengeController', method: 'remove', middleware: [auth()] },
  },
  '/scoreboard/challenges': {
    post: { controller: 'tco/scoreboard/ChallengeController', method: 'create', middleware: [auth()] },
  },
  '/scoreboard/submissions/:id': {
    put: { controller: 'tco/scoreboard/SubmissionController', method: 'update', middleware: [auth()] },
    get: { controller: 'tco/scoreboard/SubmissionController', method: 'get' },
    delete: { controller: 'tco/scoreboard/SubmissionController', method: 'remove', middleware: [auth()] },
  },
  '/scoreboard/submissions': {
    post: { controller: 'tco/scoreboard/SubmissionController', method: 'create', middleware: [auth()] },
  },
};
