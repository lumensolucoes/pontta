app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	
	.when('/',{
		controller:'AppCtrl', 
		templateUrl:'appview/index.html'
	})
	.when('/dashboard',{
		controller:'DashboardCtrl', 
		templateUrl:'appview/dashboard.html'
	})
	.when('/detalhe',{
		controller:'AtividadeCtrl', 
		templateUrl:'appview/detalhe.html'
	})
	
	.otherwise({redirectTo:'/'});
}]);