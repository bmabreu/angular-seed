'use strict';

angular.module('vehicleList').component('vehicleList', {
  controllerAs: 'vm',

  templateUrl: 'components/vehicle-list.template.html',

  controller: function VehicleController($scope, $http, $mdDialog, $location) {
    let vm = $scope;

    vm.orderProp = 'year';
    vm.vehicles = [];

    vm.status = '';

    $http.get('./vehicles.json').then(result => {
      vm.vehicles = result.data;
    });

    vm.showAdvanced = function(ev, id) {
      let vehicle = vm.vehicles[id].id === id ? vm.vehicles[id] : '';

      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'components/dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: { vehicles: [vehicle], id: vehicle.id }
      });
    };

    function DialogController($scope, locals) {
      let vm = $scope;
      vm.vehicles = locals.vehicles;
      vm.id = locals.id;
    }

    vm.go = function(path) {
      $location.url(path);
      //console.log($location.path());
    };
  }
});
