app.controller('AppCtrl', function($scope, $http, $rootScope, $location, $window, $timeout){
	
	$("#usuario").focus();
	
	$scope.login = function(){
		$location.path("/dashboard");
		//$window.open("dashboard.html", "_self");
	}
	
	$rootScope.showNav = false;
	$rootScope.nav = false;
	
	$rootScope.navbar = function(){
		$rootScope.nav = !$rootScope.nav;
	}
	
	$rootScope.logout = function(){
		$location.path("/");
		$rootScope.showNav = false;
		$rootScope.nav = false;
	}
	
});