'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2'

]).
config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/view1');
});
