'use strict';

describe('Controller: FeedbackInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('feedbackApp'));

  var FeedbackInfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeedbackInfoCtrl = $controller('FeedbackInfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
