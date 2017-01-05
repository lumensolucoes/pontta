app.controller('DashboardCtrl', function($scope, $http, $rootScope, $location, $window, $timeout){
	
	$rootScope.showNav = true;
	
	$scope.detalhar = function(){
		$location.path("detalhe");
	}
	
});