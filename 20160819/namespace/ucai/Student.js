/**
 * Created by plter on 8/19/16.
 */

if (!window.ucai) {
    window.ucai = {};
}

(function () {

    function Student(name, age, gender) {

        var self = {
            name: name,
            age: age,
            gender: gender,
            sayHello: function () {
                console.log(self.name + "说你好");
            }
        };

        // self.name = name;
        //
        // self.sayHello = function () {
        //     console.log(self.name + "说你好");
        // };

        return self;
    }

    ucai.Student = Student;
})();