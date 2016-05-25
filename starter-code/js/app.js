var redditApp = angular.module ('RedditApp', ['ngStorage']);

redditApp.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.searchTerm = '';
   $scope.results = {};

    $scope.clearSearch = function () {
        $scope.searchTerm = "";
    };

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

function TodoController ($scope) {
  $scope.saved = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [];
  localStorage.setItem('todos', JSON.stringify($scope.todos));

  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,
      done: false
    });
    $scope.todoText = ''; //clear the input after adding
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo){
      if (!todo.done)
        $scope.todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };
}


