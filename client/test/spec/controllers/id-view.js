'use strict';

describe('Controller: IdViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var IdViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdViewCtrl = $controller('IdViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdViewCtrl.awesomeThings.length).toBe(3);
  });
});
