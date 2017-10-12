/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */

/**
 * Initialize and export all model schemas
 * @author TCSCODER
 * @version 1.0
 */
import config from 'config';
import Sequelize from 'sequelize';
import logger from 'utils/logger';
import challenge from './tco/scoreboard/Challenge';
import competitor from './tco/scoreboard/Competitor';
import submission from './tco/scoreboard/Submission';
import submissionCode from './tco/scoreboard/SubmissionCode';
import submissionDesign from './tco/scoreboard/SubmissionDesign';
import challengeCompetitor from './tco/scoreboard/ChallengeCompetitor';

let dbError = false;
let sequelize = null;

/**
 * Handler and error by logging it.
 * @param {Object} e The error.
 */
function handleError(e) {
  dbError = true;
  logger.warn('An error ocurred while initiating the Scoreboard DB:');
  logger.warn(e);
  logger.warn('Scoreboard DB is not mandatory, continuing...');
}

try {
  sequelize = new Sequelize(config.SCOREBOARD.DB);

  const Challenge = challenge(sequelize);
  const Competitor = competitor(sequelize);
  const Submission = submission(sequelize);
  const SubmissionCode = submissionCode(sequelize);
  const SubmissionDesign = submissionDesign(sequelize);
  const ChallengeCompetitor = challengeCompetitor(sequelize);

  Challenge.hasMany(Submission, {
    foreignKey: 'challengeId',
  });

  Competitor.hasMany(Submission, {
    foreignKey: 'handle',
  });

  Challenge.belongsToMany(Competitor, {
    through: ChallengeCompetitor,
    foreignKey: 'challengeId',
    otherKey: 'handle',
  });

  SubmissionCode.belongsTo(Submission);
  Submission.hasOne(SubmissionCode);
  SubmissionDesign.belongsTo(Submission);
  Submission.hasOne(SubmissionDesign);

  module.exports = {
    Challenge,
    Competitor,
    Submission,
    SubmissionCode,
    SubmissionDesign,
    ChallengeCompetitor,
  };
} catch (e) {
  handleError(e);
}

module.exports.init = async (force) => {
  if (!dbError) {
    try {
      await sequelize.sync({ force });
    } catch (e) {
      handleError(e);
    }
  }
};
