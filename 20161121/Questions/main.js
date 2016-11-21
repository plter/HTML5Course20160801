/**
 * Created by plter on 2016/11/21.
 */

angular.module("questions", []).controller("main", function ($scope, $http) {


    var questionIndex = 0, question, questions;
    $scope.title = "正在加载...";

    $scope.nextQuestionHandler = function () {
        showNextQuestion();
    };

    function showNextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion();
        } else {
            alert("已经到最后一题");
        }
    }

    function showFirstQuestion() {
        questionIndex = 0;
        showQuestion();
    }

    function showQuestion() {
        var first = questions[questionIndex];
        $scope.title = first.title;
        $scope.answers = first.answers;
    }

    $http.get("data.json").then(function (result) {
        questions = result.data.questions;
        showFirstQuestion();
    });
});