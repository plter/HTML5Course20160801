/**
 * Created by plter on 2016/10/31.
 */

// const Hello = require("./Hello");

const {Hello, Student} = require("./Hello");

var h = new Hello();
h.sayHello();


var s = new Student("ucai", 10);
s.sayHello();

// var arr = [1, undefined, 3];
// var [a,b = 5,c] = arr;
// console.log(a, b, c);

// function getNumbers() {
//     return [1, 2, 3];
// }
//
// var [a,b,c] = getNumbers();
// console.log(a, b, c);

// var obj = {name: "ucai", age: 10};
// var {name, age}=obj;
// console.log(name, age);