"use strict";

angular.module("myApp").component("sampleRating", {
  controllerAs: "vm",
  bindings: {
    value: "<",
    text: "@",
    input: "="
  },
  template: `<button ng-click="vm.value(5)">Add Like</button>
  <br/>
  <p>text: <strong>{{vm.text}}</strong></p>
  <br/>
  <input ng-model="vm.input">
  <p>dynamic input: <strong>{{vm.input}}</strong></p>`
});
