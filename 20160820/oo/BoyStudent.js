/**
 * Created by plter on 8/20/16.
 */

window.ucai = window.ucai || {};


(function () {

    function BoyStudent(name, age) {

        ucai.Student.call(this, name, age, "男");

        this.sayHi = function () {
            console.log("Hi");
        }
    }

    BoyStudent.prototype = new ucai.Student();

    ucai.BoyStudent = BoyStudent;
})();