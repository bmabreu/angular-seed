"use strict";

angular.module("vehicleListTable").component("vehicleListTable", {
  controllerAs: "vm",

  templateUrl: "components/vehicle-list-table.html",

  controller: function tableController($scope, $http, $filter, ngTableParams) {
    let vm = $scope;

    $http.get("./vehicles.json").then(result => {
      vm.vehicles = result.data;
      var self = this;
      var data = result.data;
      self.tableParams = new ngTableParams(
        {
          page: 1,
          count: 5
        },
        {
          getData: function($defer, params) {
            self.data = params.sorting()
              ? $filter("orderBy")(self.vehicles, params.orderBy())
              : self.vehicles;
            self.data = params.filter()
              ? $filter("filter")(self.data, params.filter())
              : self.result.data;
            self.data = self.data.slice(
              (params.page() - 1) * params.count(),
              params.page() * params.count()
            );
            $defer.resolve(self.data);
          }
        }
        // { dataset: data }
      );
    });
  }
});
