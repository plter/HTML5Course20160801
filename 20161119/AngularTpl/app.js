/**
 * Created by plter on 2016/11/19.
 */


var angularApp = angular.module("AngularApp", []);


angularApp.controller("MainController", function ($scope) {
    $scope.data = "Hello World";
    $scope.students = [
        {name: "ucai", age: 2},
        {name: "李小军", age: 3},
        {name: "李挺军", age: 5}
    ];
});