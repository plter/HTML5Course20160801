/**
 * Created by plter on 2016/11/19.
 */


angular.module("AngularComponentApp", []).component("hello", {
    template: "<h1>Hello {{$ctrl.name}}</h1>",
    controller: function ($scope) {
        $scope.name = "ucai";
        this.name = "李小军";
    }
});