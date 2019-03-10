# TvMazeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

# Description

**This app provides a search functionality and shows all the various TV programs with full or partial name match with the search input. The consumer can click on the resulting multi-search results (consisting of name and picture of the show) and view further details of the program of their interest by clicking on it. The click event takes the user to a new route where they can see full details of the program, such as language, run time, channel it comes on, description of the show, its rating etc.. They can then go back to the multi-results page through a back button, click on another program and view its full details.**

**This program hence uses three main components in the app.components, a search component with the search bar, a short-details component showing picture and name (this component is run in a ngFor loop to display as many components as the JSON response from multi-search from the API), a full details component with all details like language, rating, runtime, channel etc.**





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
