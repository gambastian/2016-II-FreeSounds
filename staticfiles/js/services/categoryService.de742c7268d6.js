/**
 * Created by TOSHIBA on 26/09/2016.
 */
(function () {
        'use strict';

        var CategorySvc = function ($resource, $http) {

                var categoryService = {
                    list: function () {
                        var promise = $http.get('/api/category/', {})
                            .then(function (response) {
                                return response.data;
                            });
                        return promise;
                    }
                };

                return categoryService;
            }
            ;

        angular.module('freesounds.services').factory('categoryService', ['$resource', '$http', CategorySvc]);
    }()
);
