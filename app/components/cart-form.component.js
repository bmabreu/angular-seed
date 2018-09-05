//import { MatDialog } from '@angular/material';
//import { SubmitDialogComponent } from './submit-dialog';

('use strict');

angular.module('cartForm').component('cartForm', {
  controllerAs: 'vm',

  templateUrl: 'components/cart-form.template.html',

  controller: function($scope, $mdDialog) {
    let vm = $scope;
    vm.master = {};

    vm.update = function(user) {
      vm.master = angular.copy(user);
    };

    vm.reset = function() {
      vm.user = angular.copy(vm.master);
    };

    vm.state = [{ state: 'New York' }, { state: 'New Jersey' }];

    vm.gender = [
      { gender: 'Male' },
      { gender: 'Female' },
      { gender: 'I choose not to identify' }
    ];

    vm.reset();

    vm.showConfirm = function(ev) {
      let confirm = $mdDialog
        .confirm()
        .title('Are you sure you want to submit your form?')
        .textContent("Click 'Yes' to submit or 'Cancel' to go back.")
        .ariaLabel('Congrats!')
        .targetEvent(ev)
        .ok('Yes')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(
        function() {
          vm.status = 'You have submitted your form.';
        },
        function() {
          vm.status = 'Form submission cancelled.';
        }
      );
    };

    vm.clearValue = function() {
      vm.uName = undefined;
      vm.uEmail = undefined;
      vm.uAddress = undefined;
      vm.uZipcode = undefined;
      vm.uCity = undefined;
      vm.uState = undefined;
      vm.uGender = undefined;
      vm.uAgree = undefined;
      vm.cartForm.$setPristine();
    };
  }
});
