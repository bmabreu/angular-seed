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

    $scope.showAdvanced = function(ev) {
      $mdDialog
        .show({
          controller: DialogController,
          templateUrl: "components/dialog1.tmpl.html",
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          locals: { vehicles: vm.vehicles }
        })
        .then(
          function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          },
          function() {
            $scope.status = "You cancelled the dialog.";
          }
        );
    };

    function DialogController($scope, $mdDialog, locals) {

      $scope.vehicles = locals.vehicles;
      console.log(vm.vehicles);
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
