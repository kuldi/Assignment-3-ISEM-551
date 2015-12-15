'use strict';

describe('Controller: IdCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var IdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdCtrl = $controller('IdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdCtrl.awesomeThings.length).toBe(3);
  });
});
