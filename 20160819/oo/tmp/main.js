/**
 * Created by plter on 8/19/16.
 */


(function () {

    function Student(name, age, gender) {
        var self = copyProperties({}, Student.functionTemplate);

        return self;
    }

    Student.functionTemplate = {};
    Student.functionTemplate.sayHello = function () {
    };


    function BoyStudent() {
        var self = copyProperties({}, BoyStudent.functionTemplate);
        return self;
    }

    BoyStudent.functionTemplate = Student();
    BoyStudent.functionTemplate.sayHi = function () {

    };


    var s = Student();
    console.log(s);

    s = BoyStudent();
    console.log(s);
})();