/**
 * Created by Minna on 3/10/2016.
 */
(function (){
    'use strict';

    var collectionController = function($rootScope, $scope, $location, collectionService)
        {
            $scope.create = function()
            {
                console.log("Entro al scope")
                var res = collectionService.create($scope.form).then(function(data)
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
        };
    angular.module('freesounds.controllers').controller('collectionController', ['$rootScope', '$scope', '$location', 'collectionService', collectionController]);
    }());