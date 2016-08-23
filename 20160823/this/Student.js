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
    
    Student.prototype.sayHelloDelay = function () {
        // var self = this;
        // setTimeout(function () {
        //     self.sayHello();
        // },1000);

        // (function (self) {
        //     setTimeout(function () {
        //         self.sayHello();
        //     },1000);
        // })(this);

        setTimeout(function () {
            this.sayHello();
        }.bind(this)/*ES5*/,1000);
    };
    
    window.Student = Student;
})();