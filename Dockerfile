FROM node:alpine3.10 as build-step

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

#Run Steps
FROM nginx:1.19.8-alpine  
COPY --from=build-step /app/build /usr/share/nginx/html

RUN chgrp -R 0 /var/cache/nginx && \
    chmod -R g=u /var/cache/nginx
RUN chgrp -R 0 /etc/nginx && \
    chmod -R g=u /etc/nginx
