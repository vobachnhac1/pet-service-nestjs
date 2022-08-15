# Pull node image from docker hub
FROM node:10-alpine

# Set working directory
RUN mkdir -p /var/www/pet-service
WORKDIR /var/www/pet-service

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /var/www/pet-service/node_modules/.bin:$PATH
# create user with no password
RUN adduser --disabled-password petservice

# Copy existing application directory contents
COPY . /var/www/pet-service
# install and cache app dependencies
COPY package.json /var/www/pet-service/package.json
COPY package-lock.json /var/www/pet-service/package-lock.json

# grant a permission to the application
RUN chown -R petservice:petservice /var/www/pet-service
USER petservice

# clear application caching
RUN npm cache clean --force
# install all dependencies
RUN npm install

EXPOSE 3004
CMD [ "npm", "run", "start:dev" ]
