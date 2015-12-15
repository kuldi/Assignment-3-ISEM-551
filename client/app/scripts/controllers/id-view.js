'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:IdViewCtrl
 * @description
 * # IdViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('IdViewCtrl', function (
    $scope,
    $routeParams,
    Id
  ) {
    $scope.viewId = true;
    $scope.Id = Id.one($routeParams.id).get().$object;
  });

