
(function () {
    'use strict';

    var AddPiecesCrtl = function ($rootScope, $scope, Upload, $q, S3UploadService,piecesService,categoryService ) {

         categoryService.list().then(function (data) {
            $scope.categories = data;
        });
        $scope.Errors=[];
        $rootScope.Locations=[];
        $scope.newPiece={};
        $scope.upload={}
        $scope.addPiece=function(){

            console.log($scope.newPiece)
            $scope.uploadFiles($scope.newPiece.cover).then(function(data)
            {
                 $scope.uploadFiles($scope.newPiece.sound).then(function(data)
            {
                console.log($scope.newPiece.category);
                var data={name:$scope.newPiece.name,
                      sound:$rootScope.Locations[1].Location,
                      cover: $rootScope.Locations[0].Location,
                      duration:$scope.newPiece.duration,
                      category:$scope.newPiece.category,
                      artist:1
                        }
                        piecesService.add(data).then(function (result) {
                // Mark as success
                            console.log(result);
                             $scope.Errors=[];
                             $rootScope.Locations=[];
                             $scope.newPiece={};
                            $scope.upload.success=true

            });
            });
            });




        }
        $scope.addCover=function(files){
            $scope.Errors=[];
            if(files[0].name.includes(".png")||files[0].name.includes(".jpg")||files[0].name.includes(".jpeg"))
            {
                $scope.newPiece.cover=files;
            }else
                {

                     $scope.Errors.push ("The Cover extension must be png or jpg");

                }


        }
        $scope.addSound=function(files){
            $scope.Errors=[];
              if(files[0].name.includes(".mp3")||files[0].name.includes(".bmw")||files[0].name.includes(".wav"))
            {
                 $scope.newPiece.sound=files;
            }else
                {
                       $scope.Errors.push( "The Piece extension must be mp3 or wav");
                }

        }

        /*Metodo de agregar a S3*/
          $scope.uploadFiles = function (files) {
             var defered = $q.defer();
        var promise = defered.promise;
        $scope.Files = files;
        if (files && files.length > 0) {
            angular.forEach($scope.Files, function (file, key) {
                $scope.File=file

                    S3UploadService.Upload(file).then(function (result) {

                        // Mark as success
                        file.Success = true;
                         defered.resolve(result);

                    }, function (error) {
                        // Mark the error
                        $scope.Error = error;
                         defered.reject(error)
                    }, function (progress) {
                        // Write the progress as a percentage
                        file.Progress = (progress.loaded / progress.total) * 100
                    });
               }

               );
        }
           return promise}
    };

    angular.module('freesounds.controllers').controller('AddPiecesCrtl', ['$rootScope', '$scope','Upload','$q', 'S3UploadService','piecesService','categoryService', AddPiecesCrtl]);
 }());