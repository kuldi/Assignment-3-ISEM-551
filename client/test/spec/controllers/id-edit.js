'use strict';

describe('Controller: IdEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var IdEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdEditCtrl = $controller('IdEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IdEditCtrl.awesomeThings.length).toBe(3);
  });
});
