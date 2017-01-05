app.controller('DashboardCtrl', function($scope, $http, $rootScope, $location, $window, $timeout){
	
	$rootScope.showNav = true;
	
	$scope.detalhar = function(index){
		$rootScope.indexAtvidade = index;
		$location.path("detalhe");
	}
	
	$scope.getAtividades = function(){
		$http.post("http://redmine.pontta.com:8080/tarefas.jsp")
		.success(function(data){
			$rootScope.atividades = data;
		})
		.error(function(data){
			console.log("Erro: " + data);
		});
	}
	
});