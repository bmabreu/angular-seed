"use strict";

angular.module("vehicleListTable").component("vehicleListTable", {
  controllerAs: "vm",

  templateUrl: "components/vehicle-list-table.html",

  controller: function tableController($scope, $filter, ngTableParams) {
    let vm = $scope;

    $http.get("./vehicles.json").then(result => {
      vm.vehicles = result.data;
    });

    vm.usersTable = new ngTableParams(
      {
        page: 1,
        count: 8
      },
      {
        total: vm.vehicles.length,
        getData: function($defer, params) {
          vm.data = $scope.users.slice(
            (params.page() - 1) * params.count(),
            params.page() * params.count()
          );
          $defer.resolve($scope.data);
        }
      }
    );
  }
});
