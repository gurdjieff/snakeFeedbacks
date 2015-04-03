'use strict';

angular.module('feedbackApp')
  // .controller('FeedbackInfoCtrl', function ($scope) {
  //   $scope.message = 'Hello';
  // });


.controller('FeedbackInfoCtrl', ['$scope', '$routeParams',
           function($scope,$routeParams) {
           	// console.log($routeParams);
           	$scope.info = $routeParams.info;
          }]);
