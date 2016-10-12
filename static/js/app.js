/**
 * @name freesounds
 * @description Aplicacion principal
 */
(function () {
    'use strict';


    var freesounds = angular.module('freesounds', ['ngCookies', 'ngRoute', 'ngResource', 'ngMessages', 'freesounds.controllers', 'freesounds.services','ngFileUpload']);

    var freesoundsControllers = angular.module('freesounds.controllers', []);
    var freesoundsServices = angular.module('freesounds.services', []);

    var Configuration = function ($routeProvider, $compileProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/pieces', {
            templateUrl: 'static/partials/pieces.html',
            controller: 'PiecesCrtl'
        }).when('/about', {
            templateUrl: 'static/partials/about.html',
        }).when('/createCollections', {
            templateUrl: 'static/partials/createCollection.html',
            controller: 'collectionController'
        }).when('/collectionsList', {
            templateUrl: 'static/partials/collectionList.html',
            controller: 'collectionController'
        }).when('/pieces/:piece_id', {
            templateUrl: 'static/partials/pieceDetail.html',
            controller: 'PieceDetailCrtl'
                 }).when('/addPiece', {
            templateUrl: 'static/partials/addPiece.html',
            controller:'AddPiecesCrtl'
        }).when('/createArtist', {
            templateUrl: 'static/partials/createArtist.html',
            controller: 'ArtistCrtl'
        }).otherwise({
            redirectTo: '/pieces'
        });

        // remueve clases css inecesarias
        $compileProvider.debugInfoEnabled(true);

        //Anexa por defecto a todas las llamadas el encabezado
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    };

    angular.module('freesounds').config(['$routeProvider', '$compileProvider', '$locationProvider', '$httpProvider', Configuration]);
}());