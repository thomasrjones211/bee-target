(function() {
  'use strict';

  angular.module('target')
    .controller('ShowPostsController', ShowPostsController);

  function ShowPostsController($http, $state, moment) {
    const vm = this;
    // console.log('this controller is working');

  vm.$onInit = function() {
    $http.get('/api/posts').then(function(res) {
      vm.posts = res.data;
      console.log(vm.posts);
    });
  };
  vm.upVote = function(post) {
    let upVoteUrl = '/api/posts/' + post.id + '/votes';
    $http.post(upVoteUrl, post).then(function(res) {
      // console.log(res);
      $http.get('/api/posts').then(function(res) {
        // console.log(res);
        vm.posts = res.data;
      });
    });
  };
  vm.downVote = function(post) {
    let downVoteUrl = '/api/posts/' + post.id + '/votes';
    if (post.vote_count >= 1){
    $http.delete(downVoteUrl, post).then(function(res){
      // console.log(res);
      $http.get('/api/posts').then(function(res) {
        // console.log(res);
        vm.posts = res.data;
      });
    });
  }
};
    vm.selected = -1;
    vm.setShowComments = function(id) {
      console.log('setting to', id);
      vm.selected = id;
    };
    vm.commentsOn = function(id) {
      return vm.selected === id;

    };
    vm.addComment = function(id) {
      let commentUrl = '/api/posts/' + id + '/comments';
      $http.post(commentUrl, vm.newComment).then(function(res){
        // console.log(res);
        $http.get('/api/posts').then(function(res) {
        vm.posts = res.data;
        delete vm.newComment;
        });
      });
    };
  }
})();
