FROM node:lts-alpine3.17
RUN mkdir -p /server
WORKDIR /server
COPY . /server
RUN npm install
CMD [ "npm run start:dev" ]