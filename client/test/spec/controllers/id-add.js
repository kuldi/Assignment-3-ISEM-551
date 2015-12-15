'use strict';

describe('Controller: IdAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var IdAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdAddCtrl = $controller('IdAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdAddCtrl.awesomeThings.length).toBe(3);
  });
});
