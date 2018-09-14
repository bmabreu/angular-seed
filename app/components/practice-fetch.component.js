"use strict";

angular.module("myApp").component("practiceFetch", {
  controllerAs: "vm",
  templateUrl: "components/practice-fetch.template.html",

  controller: [
    "serviceFetch",
    function practiceController($scope, $http, serviceFetch) {
      let vm = $scope;
      vm.docs = [];
      
      /* example of fetch inside custom service */

      serviceFetch().then(res => {
        vm.docs = res;
      });


      /* example of fetching outside $onit */

      // $http.get(resource_url).then(res => {
      //   vm.docs = res.data;
      // });

      /* example of fetching inside $onit */

      // let resource_url =
      //   "https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=6ffaf2f592ca4029cf614bb4bf313be5";

      // function fetchDocs($http) {
      //   return $http.get(resource_url).then(res => {
      //     return res.data;
      //   });
      // }

      // this.$onInit = function() {
      //   fetchDocs($http).then(docs => {
      //     vm.docs = docs;
      //   });
      // };
    }
  ]
});
