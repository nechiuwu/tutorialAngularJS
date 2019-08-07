var app = angular.module('universidadApp',[]);

app.controller('profesorCtrl', function($scope){
	// Add info with a controller
	$scope.profesor = profesorData;
	$scope.editando = {};

	// Show and hide
	$scope.mostrarBox = false;

	// Add functions to the buttons
	$scope.editarProfesor=function(){
		angular.copy($scope.profesor, $scope.editando);
		$scope.mostrarBox = true;
	}

	$scope.guardarCambios=function(){
		angular.copy($scope.editando, $scope.profesor);
		$scope.mostrarBox = false;
	}

	$scope.cancelarCambios=function(){
		$scope.editando = {};
		$scope.mostrarBox = false;
	}
});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}