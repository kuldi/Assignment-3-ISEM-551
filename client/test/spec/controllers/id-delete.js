'use strict';

describe('Controller: IdDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var IdDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdDeleteCtrl = $controller('IdDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
