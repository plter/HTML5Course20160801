/**
 * Created by plter on 2016/11/2.
 */


(function () {


    var resultDiv = document.querySelector("#result");
    var userForm = document.querySelector("#user-form");
    // userForm.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //
    //     // console.log(this['user'].value);
    //
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function () {
    //         resultDiv.innerHTML = xhr.responseText;
    //     };
    //
    //     //GET方式
    //     // xhr.open("GET", "/hello?user=" + this['user'].value);
    //     // xhr.send();
    //
    //     //POST URL参数
    //     // xhr.open("POST", "/hello");
    //     // xhr.setRequestHeader("Content-type", 'application/x-www-form-urlencoded; charset=UTF-8');
    //     // xhr.send("user=" + this['user'].value);
    //
    //     //POST FormData
    //     // xhr.open("POST", "/upload");
    //     // var fd = new FormData();
    //     // fd.append("user", this['user'].value);
    //     // fd.append("age", this['age'].value);
    //     // var fd = new FormData(this);
    //     // xhr.send(fd);
    //
    //     //POST JSON
    //     xhr.open("POST", "/hello.json");
    //     xhr.send(JSON.stringify({user: this['user'].value, age: this['age'].value}));
    // });


    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            console.log(xhr.response);
            resultDiv.innerHTML = xhr.response.message;

            // console.log(JSON.parse(xhr.responseText));
        });

        xhr.responseType = "json";
        xhr.open("POST", "/hello.json");
        xhr.send(JSON.stringify({user: this['user'].value, age: this['age'].value}));
    });

})();