(function () {
    'use strict';
    (angular.module('ngTab', ['ng'])).directive('ngTab', function () {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                $(elem).find('.item').tab();
            }
        };
    });
})(window, document);
