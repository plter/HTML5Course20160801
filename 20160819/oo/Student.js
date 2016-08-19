/**
 * Created by plter on 8/19/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Student(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    Student.prototype.sayHello = function () {
        console.log(this._name + " say Hello");
    };

    Student.prototype.getAge = function () {
        return this._age;
    };

    Student.prototype.getGender = function () {
        return this._gender;
    };

    Student.prototype.getName = function () {
        return this._name;
    };


    ucai.Student = Student;
})();