'use strict';

angular.module('feedbackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/feedbacks'
      });
  });