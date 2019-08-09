var app = angular.module('universidadApp', ['ngRoute', 'ui.mask']);

app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

	$scope.menuSuperior = 'parciales/menu.html';


	$scope.setActive = function (Opcion) {

		$scope.mInicio = "";
		$scope.mProfesores = "";
		$scope.mAlumnos = "";
		$scope.mVistaAlumnos = "";

		$scope[Opcion] = "active";

	}
}]);

// Filtro personalizado para números de teléfono
app.filter('telefono', function () {
	return function (numero) {
		return numero.substring(0, 4) + "-" + numero.substring(4);
	}
});