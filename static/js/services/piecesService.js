/**
 * Created by TOSHIBA on 26/09/2016.
 */
(function () {
    'use strict';

    var PiecesSvc = function ($resource, $http) {

        var piecesService = {
            list: function () {
                var promise = $http.get('/api/pieces/', {})
                    .then(function (response) {
                        return response.data;
                    });
                return promise;
            }
        };

        return piecesService;
    };

    angular.module('freesounds.services').factory('piecesService', ['$resource', '$http', PiecesSvc]);
}());
