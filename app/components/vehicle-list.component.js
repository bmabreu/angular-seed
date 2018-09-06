"use strict";

angular.module("vehicleList").component("vehicleList", {
  controllerAs: "vm",

  templateUrl: "components/vehicle-list.template.html",

  controller: function VehicleController($scope, $http, $mdDialog) {
    let vm = $scope;

    vm.orderProp = "year";
    vm.vehicles = [];

    vm.status = "";

    $http.get("./vehicles.json").then(result => {
      vm.vehicles = result.data;
    });

    $scope.showAdvanced = function(ev, id) {
      console.log(id, "in show advanced function");
      $mdDialog.show({
        controller: DialogController,
        templateUrl: "components/dialog1.tmpl.html",
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: { vehicles: vm.vehicles, id: id }
      });
    };

    function DialogController($scope, $mdDialog, locals) {
      $scope.vehicles = locals.vehicles;
      console.log(vm.vehicles);
      $scope.id = locals.id;
      console.log(locals.id, "in the controller");

      $scope.find = function(id) {
        $scope.id = locals.id;
        console.log(id, "in find");
        $scope.vehicles.filter(vehicles => vehicle.id === locals.id);
        $mdDialog.find();
      };

      $scope.choose = function(vehicle) {
        $scope.vehicle = vehicle;
      };
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }
  }
});
