/**
 * Created by TOSHIBA on 26/09/2016.
 */
(function () {
    'use strict';

    var PieceDetailCrtl = function ($rootScope, $scope, $location, $routeParams, piecesService) {

        piecesService.query($routeParams.piece_id).then(function (response) {
            $scope.piece = response[0];
        })

    };

    angular.module('freesounds.controllers').controller('PieceDetailCrtl', ['$rootScope', '$scope', '$location', '$routeParams', 'piecesService', PieceDetailCrtl]);
}());