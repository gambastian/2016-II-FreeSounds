(function () {
    var app = angular.module('olimpicolombia');
    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRFToken'] = '{{ csrf_token|escapejs }}';
    }])
}());