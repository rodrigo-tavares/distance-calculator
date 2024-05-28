# Use node v20 as base image
FROM node:20 AS build-stage

WORKDIR /app/client

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/client/dist /usr/share/nginx/html

EXPOSE 3000

RUN sed -i 's/80/3000/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
