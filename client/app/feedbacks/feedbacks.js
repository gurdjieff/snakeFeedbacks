'use strict';

angular.module('feedbackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/feedbacks', {
        templateUrl: 'app/feedbacks/feedbacks.html',
        controller: 'FeedbacksCtrl'
      })
      .when('/', {
        redirectTo: '/feedbacks'
      });
  });
