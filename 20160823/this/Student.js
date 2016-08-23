/**
 * Created by plter on 2016/8/23.
 */

(function () {
    
    function Student(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    
    Student.prototype.sayHello = function () {
        console.log(this._name+"说：你好");
    };
    
    window.Student = Student;
})();