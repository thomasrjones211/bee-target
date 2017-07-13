(function() {
  'use strict';

  angular.module('target')
    .controller('EditPostController', EditPostController);

  function EditPostController($http, $stateParams, $state) {
    const vm = this;
    // console.log('this controller is working');

    vm.$onInit = function() {
      $http.get('/api/posts/' + $stateParams.id, $stateParams).then(function(res){
        // what expected, how to get, how to use $stateParams
        // console.log(res);
        vm.edittedPost = res.data;
      })
    }
    vm.editPost = function(id) {
      $http.patch('/api/posts/' + id, vm.edittedPost).then(function(res) {
        // console.log(res);
        $state.go('list');
      });
    };
  }
}());
