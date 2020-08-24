<<<<<<< HEAD
FROM node:7.9.0-alpine

# Set a working directory
WORKDIR /usr/src/app

COPY ./build/package.json .

# Install Node.js dependencies
RUN yarn install --production --no-progress

# Copy application files
COPY ./build .
=======
FROM node:6.9.5-alpine

# Copy application files
COPY ./build /usr/src/app
WORKDIR /usr/src/app

# Install Yarn and Node.js dependencies
RUN npm install yarn --global --no-progress --silent --depth 0 && \
    yarn install --production --no-progress
>>>>>>> first commit just react-starter-kit boilerplate

CMD [ "node", "server.js" ]
