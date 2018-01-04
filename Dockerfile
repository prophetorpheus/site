FROM node:8.9.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
ADD package-lock.json /usr/src/app/package-lock.json

RUN npm install --save-dev --ignore-scripts

ADD . /usr/src/app

RUN npm run postinstall

