# Use node v20 as base image
FROM node:20 AS build-stage

WORKDIR /app/client

COPY package.json .

RUN npm install

COPY . .

RUN npm run dev
