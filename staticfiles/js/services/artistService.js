/**
 * Created by user1 on 01/10/2016.
 */
(function () {
        'use strict';

        var ArtistSvc = function ($http) {
            var artistService = {
                create: function (data) {
                    var heads = {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    };
                    var promise = $http.post('/api/createArtist/',
                        {
                            headers: heads,
                            body: data
                        }).then(function (response) {
                        return response.data;
                    });
                    return promise;
                }
            };

            return artistService;
        };

        angular.module('freesounds.services').factory('artistService', ['$http', ArtistSvc]);
    }());
