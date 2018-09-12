'use strict';

angular.module('myApp').config([
  '$locationProvider',
  '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/vehicles', {
        template: '<vehicle-list text="hello"></vehicle-list>'
      })
      .when('/vehicles/:vehicleId', {
        template: '<vehicle-detail></vehicle-detail>'
      })
      .when('/cartform', { template: '<cart-form></cart-form>' })
      .when('/sample', {
        template:
          '<sample text="hello" inner="" outer="count=0" connection="value"></sample>'
      })
      .otherwise('/vehicles');
  }
]);
