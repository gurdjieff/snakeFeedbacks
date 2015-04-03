'use strict';

describe('Service: Feedback', function () {

  // load the service's module
  beforeEach(module('feedbackApp'));

  // instantiate service
  var Feedback;
  beforeEach(inject(function (_Feedback_) {
    Feedback = _Feedback_;
  }));

  it('should do something', function () {
    expect(!!Feedback).toBe(true);
  });

});
