var redditApp = angular.module ('RedditApp', []);

redditApp.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.searchTerm = '';
  $scope.redditImage = '';
   $scope.results = {
    title: '', 
    score: 0
  };


  $scope.search = function() {
    var req = {
      url: "http://www.reddit.com/search.json?q=" + $scope.searchTerm, 
      method: 'GET'
    }

    $http(req).then(function success(res){
      var redditData = res.data.data.children[0].data;
      console.log(redditData);
       $scope.redditImage = redditData.url;
        $scope.results.title = redditData.title;
        $scope.score = redditData.score;

        // console.log(redditData.title);
      // $scope.stats.name = pokeData.name;
      // $scope.stats.type = pokeData.types[0].type.name;
      // $scope.stats.height = pokeData.height;
      // $scope.stats.weight = pokeData.weight;

    }, function error(res){
      console.log(res);
    });
  }  
}]);