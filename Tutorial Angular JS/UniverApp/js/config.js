app.config(function ($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/profesores', {
			templateUrl: 'parciales/profesores.html',
			controller: 'profesoresCtrl'
		})
		.when('/alumnos', {
			templateUrl: 'parciales/alumnos.html',
			controller: 'alumnosCtrl'
		})
		.when('/vista-alumnos/:codigo', {
			templateUrl: 'parciales/vista-alumnos.html',
			controller: 'vistaAlumnosCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});