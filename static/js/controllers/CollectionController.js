/**
 * Created by Minna on 3/10/2016.
 */
(function (){
    'use strict';
console.log("Entro al controlador")
    var CollectionController = function($rootScope, $scope, $location, collectionService)
        {
console.log("Entro a la variable")
            $scope.create = function()
            {
                console.log("Entro al scope")
                var res = CollectionService.create($scope.form).then(function(data)
                    {
                        console.log("Entro a res")
                        console.log(JSON.stringify(data));
                        if(data.mensaje=="ok")
                        {
                            console.log("Entro a if")
                            $scope.success=true;
                            $scope.mensaje='Se creo la coleccion de manera exitosa'
                        }
                        else
                        {
                            console.log("Entro a else")
                            console.log('ocurrio un error: '+data);
                            $scope.error=true;
                            $scope.mensaje=data.mensaje;
                        }
                    }
                )
            }

console.log("Antes de puntoycoma")
        };
        console.log("antes de modulo")
    angular.module('freesounds.controllers').controller('CollectionController', ['$rootScope', '$scope', '$location', 'CollectionService', CollectionController]);
    }());