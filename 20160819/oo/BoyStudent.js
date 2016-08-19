/**
 * Created by plter on 8/19/16.
 */


window.ucai = window.ucai || {};

(function () {

    function BoyStudent(name, age) {
        ucai.Student.call(this, name, age);
    }


    BoyStudent.prototype = new ucai.Student();

    BoyStudent.prototype.sayHello = function () {
        ucai.Student.prototype.sayHello.call(this);

        console.log("男生 " + this.getName() + " 说你好");
    };


    ucai.BoyStudent = BoyStudent;
})();