# pull the base image
FROM node:14-alpine

# set the working direction
WORKDIR /app

# set up react-scripts
ENV PATH /app/node_modules/.bin:$PATH

# TODO: fix global packages
RUN npm install react-scripts@3.4.1 -g --silent

# install app dependencies
COPY package.json ./

COPY yarn.lock ./

RUN yarn

# add app
COPY . ./

# start app
ENTRYPOINT ["yarn", "start"]