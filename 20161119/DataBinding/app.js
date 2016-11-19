/**
 * Created by plter on 2016/11/19.
 */


angular.module("DataBinding", []).controller("MainController", function ($scope, $interval) {

    $scope.data = "Hello";
    $scope.count = 0;

    $interval(function () {
        $scope.count++;
    }, 1000);

});