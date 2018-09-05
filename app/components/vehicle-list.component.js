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
      $http.get("./vehicles.json").then(res => {
        this.vehicle = res.data[$routeParams.vehicleId];
        console.log("CURRENT", this.vehicle);
      });

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
    // function showCustomGreeting($event) {
    //   $mdDialog.show({
    //     targetEvent: $event,
    //     template:
    //       "<md-dialog>" +
    //       "  <md-content>{{make}}</md-content>" +
    //       '  <div class="md-actions">' +
    //       '    <md-button ng-click="closeDialog()">' +
    //       "      Close Greeting" +
    //       "    </md-button>" +
    //       "  </div>" +
    //       "</md-dialog>",
    //     controller: "GreetingController",
    //     locals: { make: vm.vehicles.make }
    //   });
    //   function GreetingController($scope, $mdDialog, employee) {
    //     // Assigned from construction <code>locals</code> options...
    //     $scope.make = make;

    //     $scope.closeDialog = function() {
    //       // Easily hides most recent dialog shown...
    //       // no specific instance reference is needed.
    //       $mdDialog.hide();
    //     };
    //   }
    // }
  }
});
