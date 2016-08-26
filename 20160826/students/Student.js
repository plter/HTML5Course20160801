/**
 * Created by plter on 8/26/16.
 */
var ucai;
(function (ucai) {
    var Student = (function () {
        function Student(name, age, gender) {
            this._name = name;
            this._age = age;
            this._gender = gender;
        }
        Object.defineProperty(Student.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (value) {
                this._age = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "gender", {
            get: function () {
                return this._gender;
            },
            enumerable: true,
            configurable: true
        });
        Student.prototype.sayHello = function () {
            console.log(this.name + " say hello");
        };
        return Student;
    }());
    ucai.Student = Student;
})(ucai || (ucai = {}));
//# sourceMappingURL=Student.js.map