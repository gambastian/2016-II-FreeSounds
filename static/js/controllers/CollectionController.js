/**
 * Created by Minna on 3/10/2016.
 */
(function (){
    'use strict';

    var CollectionController = funtion($rootScope, $scope, $location, $routeParams, $log, collectionService)
        {
            $log("ya llegue")
            $scope.create = function()
            {
                var res = CollectionService.create($scope.form).then(function(data)
                    {
                        console.log(JSON.stringify(data));
                        if(data.mensaje=="ok")
                        {
                            $scope.success=true;
                            $scope.mensaje='Se creo la coleccion de manera exitosa'
                        }
                        else
                        {
                            console.log('ocurrio un error: '+data);
                            $scope.error=true;
                            $scope.mensaje=data.mensaje;
                        }
                    }
                )
            }


        };
    angular.module('freesounds.controllers').controller('CollectionController', ['$rootScope', '$scope', '$location', 'CollectionService', CollectionController]);
    }());