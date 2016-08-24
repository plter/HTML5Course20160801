/**
 * Created by plter on 2016/8/24.
 */

(function () {

    function Student(name, age, gender) {
        return {
            _name: name,
            _age: age,
            _gender: gender,

            get name() {
                return this._name;
            },
            set name(value) {
                this._name = value;
            },
            get age() {
                return this._age;
            },
            set age(value) {
                this._age = value;
            },
            get gender() {
                return this._gender;
            },
            sayHello:function () {
                console.log(this.name+" say hello");
            }
        };
    }

    var s = Student("张三",10,"男");
    // console.log(s.name);
    s.sayHello();
})();