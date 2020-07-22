# PRODUCTION 

# base image
FROM node:12.18.0-alpine3.9 as build

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# This is to install all the dependencies
COPY package.json ./
#COPY package-lock.json ./

# install dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# copy the rest of the files
COPY . ./

# build
RUN npm run build

########################

# PRODUCTION ENVIRONMENT

# this image comes with nginx
FROM nginx:stable-alpine

# lets copy static react files
COPY --from=build /app/build /usr/share/nginx/html

# delete default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# my nginx config
COPY react-nginx.template /etc/nginx/conf.d 

COPY docker-entrypoint-prod.sh /

ENV REACT_APP_API_URL https://chotuve-appserver-staging.herokuapp.com
ENV REACT_APP_USING_FAKE_API ''

ENTRYPOINT ["sh", "/docker-entrypoint-prod.sh"]
