'use strict';

// angular.module('feedbackApp')
//   .factory('Feedback', function () {
//     // Service logic
//     // ...

//     var meaningOfLife = 42;

//     // Public API here
//     return {
//       someMethod: function () {
//         return meaningOfLife;
//       }
//     };
//   });



'use strict';
      angular.module('feedbackApp')
      .factory('Feedback', ['$http','$location', function($http, $location){
       var api = {

       getFeedbacks : function(scope) {
          $http.get('/api/feedbacks/').success(function(feedbacks) {
            console.log(feedbacks);
            scope.feedbacks = feedbacks;
          }).
          error(function(data) {
            alert(data);
          });
        }
     }
      
      return api
    }])
