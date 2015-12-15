'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/id', {
        templateUrl: 'views/id.html',
        controller: 'IdCtrl',
        controllerAs: 'id'
      })
      .when('/create/id', {
        templateUrl: 'views/id-add.html',
        controller: 'IdAddCtrl',
        controllerAs: 'idAdd'
      })
      .when('/id/:id', {
        templateUrl: 'views/id-view.html',
        controller: 'IdViewCtrl',
        controllerAs: 'idView'
      })
      .when('/id/:id/delete', {
        templateUrl: 'views/id-delete.html',
        controller: 'IdDeleteCtrl',
        controllerAs: 'idDelete'
      })
      .when('/id/:id/edit', {
        templateUrl: 'views/id-edit.html',
        controller: 'IdEditCtrl',
        controllerAs: 'idEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('IdRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Id', function(IdRestangular) {
    return IdRestangular.service('Id');
  });
