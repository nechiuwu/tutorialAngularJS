(function(){

var app = angular.module('ejemplosApp',[ ]);


// Inyección: se observa en http y scope
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  $scope.profesores = {};

  // Angular trae por ajax los datos de profesores.json y si no hay fallos mete los 
  // datos en la variable data cuando entres a la funcion setea al arreglo vacio de 
  // profesores la data.profesores donde profesores es el nombre del arreglo en el archivo .json
  $http.get('json/profesores.json').success(function(data){
  	// Codigo cuando es correcta la petición
  	$scope.profesores = data.profesores;
  });

  



}]);





})();
