# pull official base image
# syntax=docker/dockerfile:1
FROM node:14.15.0-alpine
EXPOSE 4000

# installs python packages required for node-sass
RUN apk add --no-cache python g++ make

# sets the app directory to /app
WORKDIR /app

# copies required files to /app
COPY package.json ./
COPY yarn.lock ./

# installs dependencies
RUN yarn install

# copies remaining files
COPY . ./

# runs the app
CMD ["yarn", "start"]