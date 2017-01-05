var app = angular.module('app', ['ngRoute']);

app.config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode(true)
}]);