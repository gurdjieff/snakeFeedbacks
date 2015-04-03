'use strict';

angular.module('feedbackApp')
      .controller('FeedbacksCtrl', ['$scope','Feedback', 
           function($scope,Feedback) {
      Feedback.getFeedbacks($scope);
 }]);


