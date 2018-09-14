"use strict";

angular 
  .module("myApp")
  // .service("VehicleService", VehicleService) <-- is this how you inject a service into a component? lol 
  .component("vehicleList", {
    controllerAs: "vm",
    templateUrl: "components/vehicle-list.template.html",

    controller: function VehicleController($scope, $http, $mdDialog) { // <-- remember to pass in service in params, if using service 

      let vm = $scope;

      vm.orderProp = "year";
      vm.vehicles = [];
      vm.status = "";

      /* API call to fetch all vehicles */
      $http.get("./vehicles.json").then(result => {
        vm.vehicles = result.data;
      });

      /* callback for < binding */

      vm.callback = function(amount) {
        vm.counter = 0;
        vm.counter += amount;
        console.log(vm.counter, "counter");
        console.log(amount);
      };

      /* Code for custom md-dialog */

      vm.showAdvanced = function(ev, id) {
        let vehicle = vm.vehicles[id].id === id ? vm.vehicles[id] : "";

        $mdDialog.show({
          controller: DialogController,
          templateUrl: "components/dialog1.tmpl.html",
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          locals: { vehicles: [vehicle], id: vehicle.id }
        });
      };

      function DialogController($scope, $mdDialog, locals) {
        let vm = $scope;
        vm.vehicles = locals.vehicles;
        vm.id = locals.id;
      }
    }
  });
