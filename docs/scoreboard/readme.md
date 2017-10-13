# Topcoder - TCO Scoreboard

## Setup

- Follow the instructions in [`Community Service Readme`](../../README.md) to setup the database and service.

## Postman Verification

- Import postman collection / environment from [`/community-service/docs/scoreboard`](.)

- Login to http://local.topcoder-dev.com:3000 using `amy_admin/topcoder1` as credentials and note down the token from the console.

![Token Capture](readme/token.jpg)

- Use the above token to set the Postman environment variable `token`.

### Challenge Endpoints Verification

#### Get Challenge Details

![Token Capture](readme/token.jpg)

#### Create New Challenge

![New Challenge Creation](readme/createChallenge.jpg)

#### Requesting with expired token

![Request with expired token](readme/tokenExpiry.jpg)

#### Updating Challenge

![Updating Challenge](readme/updateChallenge.jpg)

##### Verifiying that update was successful

![Update Verification](readme/updateVerification.jpg)

#### Deleting Challenge

![Challenge deletion](readme/deleteChallenge.jpg)

##### Verifiying that delete was successful

![Deletion Verification](readme/deleteVerification.jpg)

### Submission Endpoints Verification

#### Get Submission Details

![Get Submission](readme/getSubmission.jpg)

#### Create Base Submission

![Base submission creation](readme/createSubmission.jpg)

#### Create submission with code template

![Submission with Code template](readme/createSubmissionwCode.jpg)

#### Create submission field validation

Values taken from [`/community-service/config/tco/submissionCodeFields.json`](../../config/tco/submissionCodeFields.json).

![Submission field validation](readme/crSubFieldValidation.jpg)

#### Create submission field length validation

![Submission field length validation](readme/crSubFieldLenValidation.jpg)

#### Create submission field type validation

![Submission field type validation](readme/crSubFieldNumValidation.jpg)

#### Create submission with design template

![Submission with Design template](readme/createSubmissionwDesign.jpg)

#### Update submission

![Update Submission](readme/updateSubmission.jpg)

#### Delete submission

![Delete Submission](readme/deleteSubmission.jpg)

### Public Page Verification

- Add a Code Challenge and a few submissions to it and you will see the below table.
- The fields are loaded dynamically based on the configuration files [`/community-service/config/tco/submissionCodeFields.json`](../../config/tco/submissionCodeFields.json) and [`/community-service/config/tco/submissionDesignFields.json`](../../config/tco/submissionDesignFields.json).

- By default challenge ID 123 is setup for Code and 1234 for Design.

- **Note that when creating data, you can add submissions only for the handles associated with the challenge.**

#### Code Challenge

![Public Code Challenge Page](readme/publicCodePage.jpg)

#### Design Challenge

![Public Design Challenge Page](readme/publicDesignPage.jpg)
