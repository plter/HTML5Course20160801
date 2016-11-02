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
        xhr.open("GET", "/hello?user=" + this['user'].value);
        xhr.send();
    });

})();