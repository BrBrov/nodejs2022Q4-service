FROM node:alpine3.18
RUN mkdir -p /home-library
WORKDIR /home-library
COPY . /home-library
RUN npm install