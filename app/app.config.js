"use strict";

angular.module("myApp").config([
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");

    $routeProvider
      .when("/practice", {
        template: "<practice-fetch></practice-fetch>"
      })
      .when("/vehicles", {
        template: "<vehicle-list></vehicle-list>"
      })
      .when("/vehicles/:vehicleId", {
        template: "<vehicle-detail></vehicle-detail>"
      })
      .when("/cartform", {
        template: "<cart-form></cart-form>"
      })
      .when("/table", {
        template: "<vehicle-list-table></vehicle-list-table>"
      })
      .otherwise("/vehicles");
  }
]);
