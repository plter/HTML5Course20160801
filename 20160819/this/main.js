/**
 * Created by plter on 8/19/16.
 */

(function () {

    var student = {name: "张三", age: 10};


    function sayHello() {
        console.log(this.name + " say hello");
    }

    // sayHello();

    // student.sayHello = sayHello;
    // student.sayHello();

    sayHello.call(student);

})();