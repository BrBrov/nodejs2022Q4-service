FROM node:alpine3.18 as source
RUN mkdir -p /home-library
WORKDIR /home-library
COPY . /home-library
RUN npm install

FROM source as build
RUN npm run build

FROM build
RUN mkdir -p /server
WORKDIR /server
run mkdir -p /dist
COPY --from=build /home-library/package.json /server
RUN npm install --only=production
COPY --from=build /home-library/dist /server/dist
CMD [ "npm run start:prod" ]