'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:IdAddCtrl
 * @description
 * # IdAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('IdAddCtrl', function (
    $scope,
    Id,
    $location
  ) {
    $scope.Id = {};
    $scope.saveId = function() {
      Id.post($scope.Id).then(function() {
        $location.path('/Id');
      });
    };
  });
