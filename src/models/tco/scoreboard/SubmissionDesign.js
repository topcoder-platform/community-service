/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */

/**
 * Schema for Submission fields when submission type is Design, "inherits" the Submission model.
 * @author TCSCODER
 * @version 1.0
 */
import helper from 'utils/helper';

import designFields from '../../../../config/tco/submissionDesignFields.json';

module.exports = (sequelize) => {
  const columns = {};
  helper.addSequelizeColumns(columns, designFields.fields);

  const model = sequelize.define('submissionDesign',
    columns,
    {
      timestamps: false,
    },
  );

  model.modelName = 'SubmissionDesign';
  return model;
};
