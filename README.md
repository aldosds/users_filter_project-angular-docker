# Users Filte Project

## For this project I am using Docker

## Dockerfile

```
FROM node:20.16.0
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli@18.2.1
COPY . .
```

## docker-compose.yml

#### Note: Place the docker-compose.yml file outside the directory where the Dockerfile will be located

```
version: '3' # Set current version
services: # Define services
  angular-service: # Service name
    container_name: users-filter # Container name
    build: ./users-filter-project # Dockerfile Location
    volumes: # Volumes
      - './users-filter-project:/usr/src/app'
    ports:
      - '4200:4200' # Ports
    command: >
      bash -c "npm install && ng serve --host 0.0.0.0 --port 4200"
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
