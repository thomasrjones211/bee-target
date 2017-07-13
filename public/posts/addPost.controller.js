(function() {
  'use strict';

  angular.module('target')
    .controller('AddPostController', AddPostController);

  function AddPostController($http, $state) {
    const vm = this;
    // console.log('this controller is working');

    vm.addPost = function(){
      $http.post('/api/posts', vm.newPost).then(function(res) {
        $state.go('list');
      })
    }
  }
}());
