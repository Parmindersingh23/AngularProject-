angular.module('worldEvents', [])
  .factory('posts', [function(){
    var p = {
      posts: []

    };
    return p;
  }])
  .controller('MainCtrl', ['$scope', 'posts', function($scope, posts){

  $scope.posts = posts.posts;

   $scope.addPost = function(){
    if(!$scope.title || $scope.title === '')
      { return; } //post cant be sumbitted if blank
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });

      $scope.title ='';
      $scope.link='';
    };

   $scope.incrementUpvotes = function(post){
      post.upvotes +=1;
   };

}]);

angular.module('worldEvents', ['ui.router'])
  .config([
    '$stateProvider',
    'urlRouterProvder',
    function($stateProvider, $urlRouterProvder){
      $stateProvider
        .state('home',{
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        });
      $urlRouterProvder.otherwise('home');
    }])
