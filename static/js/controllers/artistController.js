/**
 * Created by Jorge Perea on 01/10/2016.
 * Controlador que se encarga de la ejecución de las diferentes funciones y de la obtención de la respuesta
 */

(function () {
    'use strict';

    var ArtistCrtl = function ($rootScope, $scope, $location, artistService) {

        $scope.create = function () {
            var res = artistService.create($scope.form).then(function (data) {
                console.log(JSON.stringify(data));
                if (data.mensaje == 'ok') {
                    $scope.success = true;
                    $scope.mensaje = 'Se creo el artista de forma exitosa';
                } else {
                    console.log('Ocurrio un error:' + data);
                    $scope.error = true;
                    $scope.mensaje = data.mensaje;
                }
            })
        }
    };

    angular.module('freesounds.controllers').controller('ArtistCrtl', ['$rootScope', '$scope', '$location', 'artistService', ArtistCrtl]);
}());
