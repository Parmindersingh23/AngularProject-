angular.module('worldEvents', [])
<<<<<<< HEAD
    .factory('posts', [function() {
        var p = {
            posts: []

        };
        return p;
    }])
    .controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {

        $scope.posts = posts.posts;

        $scope.addPost = function() {
            if (!$scope.title || $scope.title === '') {
                return;
            } //post cant be sumbitted if blank
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0
            });

            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };

        $scope.incrementDownvotes = function(post) {
            post.upvotes -= 1;
        };


    }]);

    // .controller('PostsCtrl', [
    //   '$scope',
    //   '$stateParams',
    //   'posts',
    //   function($scope,$stateParams, posts){


    //   $scope.post = posts.posts[$stateParams.id];

    //   }]);


// angular.module('worldEvents', ['ui.router'])
//     .config([
//         '$stateProvider',
//         '$urlRouterProvder',
//         function($stateProvider, $urlRouterProvider) {
//             $stateProvider
//                 .state('home', {
//                     url: '/home',
//                     templateUrl: '/home.html',
//                     controller: 'MainCtrl'
//                 });
//                 .state('posts, {
//                   url: '/posts/{id}',
//                   templateUrl: '/posts.html',
//                   controller: 'PostsCtrl'});
//             $urlRouterProvider.otherwise('home');
//         }
//     ])
=======
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
>>>>>>> 7ad1b862bc752360493bf1fb89b224e6d48bb6ec
