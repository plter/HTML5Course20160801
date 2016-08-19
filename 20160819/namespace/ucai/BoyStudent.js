/**
 * Created by plter on 8/19/16.
 */

// if (!window.ucai) {
//     window.ucai = {};
// }

window.ucai = window.ucai || {};//定义命名空间

(function () {

    function BoyStudent(name, age) {
        // var self = {
        //     __proto__/*用于指定继承的类,ES5特性*/: ucai.Student(name, age, "男"),
        //     sayHi: function () {
        //         console.log("男学生 " + self.name + " sayHi");
        //     }
        // };

        var __super = ucai.Student(name, age, "男");

        var superSayHello = __super.sayHello;

        var self = copyProperties(__super, {
            sayHi: function () {
                console.log(self.name + " sayHi");
            },
            sayHello: function () {

                superSayHello();

                console.log("哇,竟然可以重写");
            }
        });

        // self.sayHello = function () {
        //     console.log("男学生" + self.name + "说你好");
        // };

        return self;
    }

    ucai.BoyStudent = BoyStudent;
})();