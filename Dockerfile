FROM node:20.16.0
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli@18.2.1
COPY . .
