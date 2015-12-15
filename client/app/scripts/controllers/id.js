'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:IdCtrl
 * @description
 * # IdCtrl
 * Controller of the clientApp
 */
/*angular.module('clientApp').controller('IdCtrl', function ($scope){
  $scope.Id= [
    {
      Name: 'ABC',
      Contact: '12345'
    },
    {
      Name: 'XYZ',
      Contact: '45632'
    }
  ];
}); */

angular.module('clientApp').controller('IdCtrl', function (
  $scope,
  Id
) {
  $scope.Id = Id.getList().$object;
});
