/**
 * Created by plter on 8/20/16.
 */

window.ucai = window.ucai || {};


(function () {

    function Student(name, age, gender) {

        var self = this;
        self._name = name;

        this.sayHello = function () {
            console.log(self._name + " say Hello");
        }
    }

    ucai.Student = Student;
})();