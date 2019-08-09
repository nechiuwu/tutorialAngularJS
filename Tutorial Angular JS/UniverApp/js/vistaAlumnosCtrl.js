app.controller('vistaAlumnosCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    // $routeParams se encarga de "atrapar" los parámetros que se envían desde el html
    var codigo = $routeParams.codigo;

    $scope.mascaraTelefono = "9999-9999";
    $scope.setActive("mAlumnos");
    $scope.alumno = {};
    $scope.actualizado = false;

    $http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).success(function (data) {
        if (data.err !== undefined) {
            window.location = "#/alumnos";
            return;
        }
        $scope.alumno = data;
    });

    $scope.guardarAlumno = function () {
        $http.post('php/servicios/alumnos.guardar.php', $scope.alumno).success(function (data) {
            if (data.err === false) {
                $scope.actualizado = true;
                console.log(data);
                setTimeout(function () {
                    $scope.actualizado = false;
                    $scope.$apply();
                }, 2500);
            }
        });
    }
}]);