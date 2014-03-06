'use strict';
var admin = angular.module('miningApp.admin',[])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/admin/connection', {
        templateUrl: 'views/connection.html',
        controller: 'ConnectionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
;