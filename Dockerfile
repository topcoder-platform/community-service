# Builds production version of Community App inside Docker container,
# and runs it against the specified Topcoder backend (development or
# production) when container is executed.

FROM node:8.17.0
LABEL app="Community Services" version="1.0"

WORKDIR /opt/app
COPY . .

RUN npm install
RUN npm test
ENV NODE_ENV=$NODE_ENV

EXPOSE 8000
CMD ["npm", "start"]
