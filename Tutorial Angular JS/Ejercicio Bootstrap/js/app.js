
var app = angular.module('universidadApp',[ ]);


app.controller('profesorCtrl', function($scope){
		
	$scope.profesor = profesorData;
	$scope.editando = {};


	$scope.EditarProfesor = function(){

		angular.copy( $scope.profesor, $scope.editando );

	}

	$scope.GuardarCambios = function(){
		angular.copy( $scope.editando, $scope.profesor );
	}

	$scope.CancelarCambios = function(){

		$scope.editando = {};

	}


});



var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}