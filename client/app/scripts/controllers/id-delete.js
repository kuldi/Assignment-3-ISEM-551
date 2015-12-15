'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:IdDeleteCtrl
 * @description
 * # IdDeleteCtrl
 * Controller of the clientApp
*/
angular.module('clientApp')
  .controller('IdDeleteCtrl', function (
    $scope,
    $routeParams,
    Id,
    $location
  ) {
    $scope.Id = Id.one($routeParams.id).get().$object;
    $scope.deleteId = function() {
      $scope.Id.remove().then(function() {
        $location.path('/Id');
      });
    };
    $scope.back = function() {
      $location.path('/Id/' + $routeParams.id);
    };
  });
