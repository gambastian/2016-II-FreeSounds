/**
 * Created by Minna on 5/10/2016.
 */
(function() {
        'use strict';

        var collectionSrv = function ($http) {
            var CreateCollectionService={
                create: function (data) {
                    var heads = {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    };
                    var promise = $http.post('/api/createCollections/',
                        {
                            headers: heads,
                            body: data
                        }
                    ).then(function (response) {
                            return response.data;
                        }
                    );
                    return promise;
                }
        };
        return CreateCollectionService;
        }
        angular.module('freesounds.services').service('collectionService', ['$http', collectionSrv]);
    }()
);