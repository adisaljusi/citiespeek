FROM node:lts-alpine3.12 AS builder

ARG MAPBOX_API_KEY

ENV REACT_APP_MAPBOX_API_KEY ${MAPBOX_API_KEY}

WORKDIR /app

ADD citiespeek-fe .

RUN rm yarn.lock \
  && yarn install --frozen-lockfile \
  && yarn build


FROM nginx:1.18-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build . 

ENTRYPOINT [ "nginx",  "-g",  "daemon off;" ]