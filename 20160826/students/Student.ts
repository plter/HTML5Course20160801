/**
 * Created by plter on 8/26/16.
 */

namespace ucai {

    export class Student {

        private _name;
        private _age;
        private _gender;

        constructor(name, age, gender) {
            this._name = name;
            this._age = age;
            this._gender = gender;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value;
        }

        get gender() {
            return this._gender;
        }

        sayHello() {
            console.log(this.name + " say hello");
        }
    }

}