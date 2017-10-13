# Community App API Services

API service to support Topcoder Community App [Community App](https://github.com/topcoder-platform/community-app)

## Community App Installation

- Please follow the instructions in [Community App](https://github.com/topcoder-platform/community-app) to install community-app.

- Give attention to the section `Configuration for Scoreboard API`.

- `URI.COMMUNITY_API` should be set to point to this community service. E.g. if community service is hosted at `http://local.topcoder-dev.com:4000`, URI.COMMUNITY_API should be set as `http://local.topcoder-dev.com:4000`.

## Local Development

1. `npm install`
2. `npm run dev`
3. Change DB config in `config` folder as suited

## Local Installation

1. Install Docker and Docker Compose
2. Run `docker-compose build`
3. Run `docker-compose up`
4. To Seed DB on initial setup, run `npm run init-scoreboard-data` directly in docker container (Use docker exec)
5. Challenge type configuration can be done for [`Code`](config/tco/submissionCodeFields.json) and [`Design`](config/tco/submissionCodeDesign.json)
Upon changing these json files, `npm run init-scoreboard-data` and  `npm start` need to be run again to have the latest changes.
6. The role that has write access to the API is configured using `config.SCOREBOARD.ADMIN_ROLE`

## TCO Scorebord Verification Guide

TCO Scoreboard Verification guide is present [`here`](docs/scoreboard/readme.md).
