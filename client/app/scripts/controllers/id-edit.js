'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:IdEditCtrl
 * @description
 * # IdEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('IdEditCtrl', function (
    $scope,
    $routeParams,
    Id,
    $location
  ) {
    $scope.editId = true;
    $scope.Id = {};
    Id.one($routeParams.id).get().then(function(Id) {
      $scope.Id =Id;
      $scope.saveId = function() {
        $scope.Id.save().then(function() {
          $location.path('/Id/' + $routeParams.id);
        });
      };
    });
  });
