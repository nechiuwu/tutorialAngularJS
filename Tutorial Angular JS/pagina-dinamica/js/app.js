var app = angular.module('miApp',['ngRoute']);


app.controller('mainCtrl',[ '$scope' , function($scope){

  console.log("Ahi vamos");

}]);



app.config( function( $routeProvider ){

  $routeProvider
      .when('/',{
        templateUrl: 'paginas/pagina1.html'
      })
      .when('/pag2',{
        templateUrl: 'paginas/pagina2.html'
      })
      .otherwise({
        redirectTo: '/'
      })

})
