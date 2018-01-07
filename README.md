# [Demo](http://savory-ladybug.surge.sh)

# Airline Reservation system

This is the YCompany airline reservation system portal covering minor functionalaties such as search and book the flight. In this application when user select the flight the corresponding vendor's style and brand image gets loaded in detail page. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Features 
* Localization support for multiple languages
* Sass Support
* Responsive layout 
* Different major browser supported
* Automation build
* Adheres to [Angular's official guideline](https://angular.io/guide/styleguide) 
* Test cases implemented for flight search component
* Zero linting errors
* Run in both development and production mode

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Assumptions 
Vendor's brand image and style files are hosted in their respective domain. The url for the style and brand image is saved in the Database. These information will be received from the ARS server in the flight object.

## Continous Integration
This project supports CI using 'Appveyor'.

## Hosting
Hosting is done using 'surge'