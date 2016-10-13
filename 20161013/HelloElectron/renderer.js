// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var btnShowAlert = document.querySelector("#show-alert");

const Hello = require("./Hello");

btnShowAlert.onclick = function () {
    // alert("Hello");

    let h = new Hello();
    h.sayHello();
};