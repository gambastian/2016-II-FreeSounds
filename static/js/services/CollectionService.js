/**
 * Created by Minna on 5/10/2016.
 */
(function() {
        'use strict';

        var CollectionSrv = function ($http) {
            var createCollectionService={
                create: function (data) {
                    var heads = {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/x-www-form-urlencoded' //Revisar esto, no creo que toque enviarlo encriptado!!!!!!!!!!!!!!
                    };
                    var promise = $http.post('/api/createCollections',
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
        return createCollectionService;
        }
        angular.module('freesounds.services').factory('createCollectionService', ['$http', CollectionSrv]);
    }()
);