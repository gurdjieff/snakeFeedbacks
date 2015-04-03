'use strict';

describe('Controller: FeedbacksCtrl', function () {

  // load the controller's module
  beforeEach(module('feedbackApp'));

  var FeedbacksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeedbacksCtrl = $controller('FeedbacksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
