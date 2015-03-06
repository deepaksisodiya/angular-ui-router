/**
 * Created by Deepak Sisodiya on 06/03/15.
 */


var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url : '/home',
      templateUrl : '/html/home.html'
    })
    .state('about', {
      url : '/about',
      templateUrl : '/html/about.html'
    })
    .state('contact', {
      url : '/contact',
      templateUrl : '/html/contact.html'
    })
    .state('news', {
      url : '/news',
      templateUrl : '/html/news.html'
    })
});