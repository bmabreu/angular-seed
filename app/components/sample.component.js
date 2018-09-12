'use strict';

'use strict';
angular.module('sample', ['ngRoute']);

angular.module('sample').component('sample', {
  controllerAs: 'vm',
  templateUrl: 'components/sample.template.html',
  bindings: {
    text: '@',
    in: '<',
    out: '<'
  },
  controller: (vm.callback = function($scope, amount) {
    $scope.count += amount;
  })
});
