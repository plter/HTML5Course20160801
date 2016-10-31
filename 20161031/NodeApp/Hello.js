/**
 * Created by plter on 2016/10/31.
 */

"use strict";

class Hello {

    sayHello() {
        console.log("Hello World");
    }
}


class Student {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    sayHello() {
        console.log("Hello " + this.name);
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
}

module.exports = {Hello: Hello, Student: Student};