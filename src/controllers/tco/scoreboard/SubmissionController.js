/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */

/**
 * Controller for submission endpoints
 * @author TCSCODER
 * @version 1.0
 */
import service from 'services/tco/scoreboard/SubmissionService';

/**
 * Creates a submission
 * @param req the request
 * @param res the response
 */
async function create(req, res) {
  const result = await service.create(req.body);
  res.send(result);
}

/**
 * Get a detail of submission
 * @param req the request
 * @param res the response
 */
async function get(req, res) {
  const result = await service.get(req.params.id);
  res.send(result);
}

/**
 * Updates a submission
 * @param req the request
 * @param res the response
 */
async function update(req, res) {
  const result = await service.update(req.params.id, req.body);
  res.send(result);
}

/**
 * Deletes a saved submission
 * @param req the request
 * @param res the response
 */
async function remove(req, res) {
  const result = await service.remove(req.params.id);
  res.send(result);
}

module.exports = {
  create,
  get,
  update,
  remove,
};
