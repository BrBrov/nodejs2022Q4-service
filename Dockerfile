FROM node:slim as source
RUN mkdir -p /home-library
WORKDIR /home-library
COPY . /home-library
RUN npm install
RUN npm run build

FROM node:slim
RUN mkdir -p /server
WORKDIR /server
RUN mkdir -p /dist
COPY --from=source /home-library/package.json /server
RUN npm install --omit=dev
COPY --from=source /home-library/dist /server/dist
CMD [ "npm run start:prod" ]