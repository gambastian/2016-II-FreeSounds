/**
 * Created by TOSHIBA on 26/09/2016.
 */
(function () {
    'use strict';

    var PieceDetailCrtl = function ($rootScope, $scope, $location, $routeParams, $route, piecesService, categoryService) {

        $scope.viewLyricsInput = false;
        $scope.viewPieceInput = false;
        $scope.viewLyrics = false;
        $scope.piece = null;
        $scope.hasLyrics = false;
        $scope.lyrics = 'Add new lyrics to the piece...';
        $scope.lyricsErrorMessage = null;
        $scope.lyricsError = false;
        $scope.nameErrorMessage = null;
        $scope.nameError = false;
        $scope.categories = false;

        piecesService.query($routeParams.piece_id).then(function (response) {
            $scope.piece = response[0];
            $scope.hasLyrics = $scope.piece.fields.lyrics != null && 0 != $scope.piece.fields.lyrics.trim().length;
        });

        categoryService.list().then(function (data) {
            $scope.categories = data;
        });

        $scope.toggleLyricsInput = function () {
            $scope.viewLyricsInput = !$scope.viewLyricsInput;
            $scope.viewPieceInput = false;
        };

        $scope.togglePieceInput = function () {
            $scope.viewPieceInput = !$scope.viewPieceInput;
            $scope.viewLyricsInput = false;
            $scope.viewLyrics = false;
        };

        $scope.toggleViewLyrics = function () {
            $scope.viewLyrics = !$scope.viewLyrics;
            $scope.viewPieceInput = false;
        };

        $scope.discardLyrics = function () {
            $scope.viewLyricsInput = false;
        };

        $scope.saveLyrics = function (piece) {
            if (!piece.fields.lyrics || 0 === piece.fields.lyrics.length) {
                $scope.lyricsErrorMessage = 'Lyrics of a piece must not be empty !!';
                $scope.lyricsError = true;
            }
            else {
                $scope.lyricsError = false;
                piecesService.update(piece).then(function (data) {
                    $route.reload();
                })
            }
        };

        $scope.savePiece = function (piece) {
            if (!piece.fields.lyrics || 0 === piece.fields.lyrics.length) {
                $scope.lyricsErrorMessage = 'Lyrics of a piece must not be empty !!';
                $scope.lyricsError = true;
            }
            else if (!piece.fields.name || 0 === piece.fields.name.length) {
                $scope.nameErrorMessage = 'Name of a piece must not be empty !!';
                $scope.nameError = true;
            }
            else {
                $scope.lyricsError = false;
                $scope.nameError = false;
                piecesService.update(piece).then(function (data) {
                    $route.reload();
                })
            }
        };

    };

    angular.module('freesounds.controllers').controller('PieceDetailCrtl', ['$rootScope', '$scope', '$location', '$routeParams', '$route', 'piecesService', 'categoryService', PieceDetailCrtl]);
}());