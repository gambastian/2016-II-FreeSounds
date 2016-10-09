/**
 * @name freesounds
 * @description Aplicacion principal
 */
(function () {
    'use strict';

    var freesounds = angular.module('freesounds', ['ngCookies', 'ngRoute', 'ngResource', 'freesounds.controllers', 'freesounds.services']);
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
            controller: 'CollectionController'
        }).when('/collectionsList', {
            templateUrl: 'static/partials/collectionList.html',
            controller: 'CollectionController'
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