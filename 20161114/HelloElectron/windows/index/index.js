// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

class Index{

    constructor(){
        this._btn = document.getElementById("btn");
        this._btn.addEventListener("click",function (e) {

            // alert("Clicked");

            // console.log("Clicked");

            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                console.log(xhr.responseText);
            };
            xhr.open("GET","http://ucai.cn");
            xhr.send();
        });
    }
}

new Index();
