# Example for Redux with Angular and React

## Howto Start the Example

To start the rest server run:
`./gradlew run`
This needs an installed Java Environment.

### Angular
`cd shop-frontend-angular-redux`
`npm start`

### React
`cd shop-frontend-react`
`npm start`


## Libraries and Frameworks
This repository contains an example application using [Angular 4](https://angular.io/) with
[Redux](http://redux.js.org/docs/introduction/) and [angular-redux/store](https://github.com/angular-redux/store).
The backend uses [Spring boot](https://projects.spring.io/spring-boot/) and
[Spring-data-rest](http://projects.spring.io/spring-data-rest/) to provide a simple REST api.

This example was created for a talk about "angular+redux" that I gave at
[JAX 2017](https://jax.de/session/angular-anwendungen-mit-redux/). You can find the slides (in german)
[here (google docs)](https://docs.google.com/presentation/d/1JeRlmAw9v3RYmTZTzXyJHLTUshM1PY4zKazqBzNI384/edit?usp=sharing)
or [here (pdf)](./angular_redux_manuel_mauky.pdf).

## Usecase
The use case of this example app is a Shop that sells DVDs and Books. The web app loads all available
products and product categories from the server. Then the user can put products into a shopping cart.
However, at the moment there is no ordering process implemented yet.
I hope you can still see the idea of combining Redux + Angular.

