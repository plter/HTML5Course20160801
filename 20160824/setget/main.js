/**
 * Created by plter on 2016/8/24.
 */

(function () {

    (function () {
        function Student(name, age, gender) {
            this._name = name;
            this._age = age;
            this._gender = gender;
        }

        // Object.defineProperty(Student.prototype,"name",{
        //     set:function (value) {
        //         this._name = value;
        //     },
        //     get:function () {
        //         return this._name;
        //     }
        // });
        //
        // Object.defineProperty(Student.prototype,"age",{
        //     set:function (value) {
        //         this._age = value;
        //     },
        //     get:function () {
        //         return this._age;
        //     }
        // })

        Object.defineProperties(Student.prototype, {
            name: {
                set: function (value) {
                    this._name = value;
                },
                get: function () {
                    return this._name;
                }
            },
            age: {
                set: function (value) {
                    this._age = value;
                },
                get: function () {
                    return this._age;
                }
            },
            gender: {
                get: function () {
                    return this._gender;
                }
            }
        });

        window.Student = Student;
    })();


    //main
    (function () {
        var s = new Student("张三", 10, "男");
        console.log(s.name);
    })();
})();