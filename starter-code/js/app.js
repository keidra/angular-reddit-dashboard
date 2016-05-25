var redditApp = angular.module ('RedditApp', []);

redditApp.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.searchTerm = '';
   $scope.results = {};

  $scope.search = function() {
    var req = {
      url: "http://www.reddit.com/search.json?q=" + $scope.searchTerm, 
      method: 'GET'
    }

    $http(req).then(function success(res){
      var redditData = res.data;
       $scope.results = redditData.data.children;
         console.log(redditData.data.children);

    }, function error(res){
      console.log(res);
    });
  }  


}]);




