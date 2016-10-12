(function () {
    var app = angular.module('freesounds');
    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRFToken'] = '{{ csrf_token|escapejs }}';
    }])
}());