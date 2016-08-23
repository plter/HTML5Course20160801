/**
 * Created by plter on 2016/8/23.
 */

(function () {
    
    function GirlStudent(name,age) {
        Student.call(this,name,age,"女");
    }
    
    GirlStudent.prototype = new Student();//继承自Student

    GirlStudent.prototype.sayHi = function () {
        console.log(this.getName()+"sayHi");
    };


    window.GirlStudent = GirlStudent;
})();