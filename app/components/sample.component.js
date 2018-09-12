'use strict';

'use strict';
angular.module('sample', ['ngRoute']);

angular.module('sample').component('sample', {
  controllerAs: 'vm',
  templateUrl: '/components/sample.template.html',
  bindings: {
    text: '@',
    inner: '=',
    outer: '<',
    connection: '<'
  }
});
