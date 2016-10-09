/**
 * Created by TOSHIBA on 26/09/2016.
 */
(function () {
    'use strict';

    var PiecesCrtl = function ($rootScope, $scope, $location, piecesService) {

        var res = piecesService.list().then(function (data) {
            $scope.pieces = data;
        }, function (response) {
            $scope.error = true;
            console.log('Error: ' + response);
        })

        $scope.viewDetail = function (piece_id) {
            $location.url('/pieces/' + piece_id);
        }

    };

    angular.module('freesounds.controllers').controller('PiecesCrtl', ['$rootScope', '$scope', '$location', 'piecesService', PiecesCrtl]);
}());