/**
 * Created by TOSHIBA on 26/09/2016.
 */
(function () {
    'use strict';

    var PieceDetailCrtl = function ($rootScope, $scope, $location, $routeParams, piecesService) {

        $scope.viewLyricsInput = false;
        $scope.piece = null;
        $scope.hasLyrics = false;
        $scope.lyrics = 'Add new lyrics to the piece...';

        piecesService.query($routeParams.piece_id).then(function (response) {
            $scope.piece = response[0];
            $scope.hasLyrics = $scope.piece.fields.lyrics != null && 0 != $scope.piece.fields.lyrics.trim().length;
        });

        $scope.toggleLyricsInput = function () {
            $scope.viewLyricsInput = !$scope.viewLyricsInput;
        };

        $scope.discardLyrics = function () {
            $scope.viewLyricsInput = false;
        };

        $scope.saveLyrics = function (lyrics) {
            console.log(lyrics);
        };
        
    };

    angular.module('freesounds.controllers').controller('PieceDetailCrtl', ['$rootScope', '$scope', '$location', '$routeParams', 'piecesService', PieceDetailCrtl]);
}());