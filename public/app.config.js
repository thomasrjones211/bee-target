(function() {
  'use strict';

  angular.module('target').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'list',
        url: '/',
        component: 'showPosts',
      })
      .state({
        name: 'add',
        url: '/add',
        component: 'addPost',
      })
      .state({
        name: 'editPost',
        url: 'posts/:id/edit',
        component: 'editPost',
      });
    }
}());
