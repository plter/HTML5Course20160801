/**
 * Created by plter on 2016/11/21.
 */

angular.module("questions", []).controller("main", function ($scope, $http) {


    var question, questions, score = 0;
    $scope.questionIndex = 0;
    $scope.atLastQuestion = false;
    $scope.title = "正在加载...";
    var questionForm = document.querySelector("#form-question");

    $scope.nextQuestionHandler = function () {
        showNextQuestion();
    };

    $scope.btnSubmitBtnClicked = function () {
        alert("最终得分" + (score + (isCurrentAnswerCorrect() ? 1 : 0)));
    };

    function isCurrentAnswerCorrect() {
        return question.correct == questionForm["answer"].value;
    }

    function showNextQuestion() {

        if ($scope.questionIndex < questions.length - 1) {
            if (isCurrentAnswerCorrect()) {
                score += 1;
            }

            $scope.questionIndex++;
            showQuestion();
        } else {
            alert("已经到最后一题");
        }
    }

    function showFirstQuestion() {
        $scope.questionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        question = questions[$scope.questionIndex];
        var first = question;
        $scope.title = first.title;
        $scope.answers = first.answers;
        $scope.atLastQuestion = $scope.questionIndex == questions.length - 1;
    }

    $http.get("data.json").then(function (result) {
        questions = result.data.questions;
        showFirstQuestion();
    });
});