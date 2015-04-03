'use strict';

angular.module('feedbackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/feedback_info/:info', {
        templateUrl: 'app/feedback_info/feedback_info.html',
        controller: 'FeedbackInfoCtrl'
      })
      // .when('/feedback_info', {
      //   templateUrl: 'app/feedback_info/feedback_info.html',
      //   controller: 'FeedbackInfoCtrl'
      // });
  });
