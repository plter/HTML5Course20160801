/**
 * Created by plter on 2016/11/2.
 */


(function () {


    var resultDiv = document.querySelector("#result");
    var userForm = document.querySelector("#user-form");
    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // console.log(this['user'].value);

        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resultDiv.innerHTML = xhr.responseText;
        };
        // xhr.open("GET", "/hello?user=" + this['user'].value);
        // xhr.send();

        // xhr.open("POST", "/hello");
        // xhr.setRequestHeader("Content-type", 'application/x-www-form-urlencoded; charset=UTF-8');
        // xhr.send("user=" + this['user'].value);

        xhr.open("POST", "/upload");
        var fd = new FormData();
        fd.append("user", this['user'].value);
        fd.append("age", this['age'].value);
        xhr.send(fd);
    });

})();