'use strict';

angular.module('feedbackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/feedback', {
        templateUrl: 'app/feedbacks/feedback.html',
        controller: 'FeedbackCtrl'
      })
      .when('/feedbacks', {
        templateUrl: 'app/feedbacks/feedbacks.html',
        controller: 'FeedbacksCtrl'
      });
  });
