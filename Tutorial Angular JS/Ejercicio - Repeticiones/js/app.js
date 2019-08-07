(function(){

var app = angular.module('universidadApp',[ ]);

// Se colocan corchetes porque se deben pasar más variables a la funcion (no todavía)
app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Luisa", "Lala", "Ruth", "Isa"];

		$scope.listadoProfesores = {
			profesores: [{
				nombre:"Ricarda",
				edad:57,
				clase:"Rui12"
			},{
				nombre:"Zule",
				edad:35,
				clase:"Ima3"
			},{
				nombre:"MichixD",
				edad:46,
				clase:"Miau1"
			}]
		}
}]);

})();
