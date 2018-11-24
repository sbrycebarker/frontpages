angular.module('landingApp', []).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/')
  $stateProvider
  .state('home', {
    url: '/',
  })
})
