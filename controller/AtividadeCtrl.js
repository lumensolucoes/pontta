app.controller('AtividadeCtrl', function($scope, $http, $rootScope, $location, $window, $timeout){
	
	$scope.back = function(){
		$location.path("dashboard");
	}
	
});