/**
 * Created by plter on 8/19/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Student(name, age, gender) {
        this._name = name;
    }

    Student.prototype.sayHello = function () {
        console.log(this._name + " say Hello");
    };


    ucai.Student = Student;
})();