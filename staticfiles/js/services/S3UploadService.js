/**
 * Created by dvdtr on 1/10/2016.
 */



(function () {
    'use strict';

    var AddPiecesSvc = function ($q,$http,$rootScope) {
        this.Progress = 0;
        this.Upload = function (file) {
            var deferred = $q.defer();
            var params = {Bucket: 'mytempbucket1028', Key: file.name, ContentType: file.type, Body: file};
            var options = {
                // Part Size of 10mb
                partSize: 10 * 1024 * 1024,
                queueSize: 1,
                // Give the owner of the bucket full control
                ACL: 'bucket-owner-full-control'
            };

                $http.get('/api/credentials/')
                    .then(function (response) {
                        AWS.config.update({
                        accessKeyId:response.data.accessKeyId,
                         secretAccessKey:response.data.secretAccessKey
                        });
                        var bucket = new AWS.S3({params: {Bucket: 'mytempbucket1028', maxRetries: 10}, httpOptions: {timeout: 360000}});
                         var uploader = bucket.upload(params, options, function (err, data) {

                if (err) {
                    deferred.reject(err);
                }
                deferred.resolve();
                $rootScope.Locations.push(data)
            });
            uploader.on('httpUploadProgress', function (event) {
                deferred.notify(event);
            });
                    });


            return deferred.promise;
        };
    }
    angular.module('freesounds.services').service('S3UploadService', ['$q','$http','$rootScope', AddPiecesSvc]);
}());