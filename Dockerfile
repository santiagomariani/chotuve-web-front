# PRODUCTION 

# base image
FROM node as build

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# This is to install all the dependencies
COPY package.json ./
COPY package-lock.json ./

# install dependencies
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

EXPOSE 80

COPY docker-entrypoint-prod.sh /

ENTRYPOINT ["sh", "/docker-entrypoint-prod.sh"]
