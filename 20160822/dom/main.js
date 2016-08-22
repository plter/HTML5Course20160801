/**
 * Created by plter on 8/22/16.
 */

(function () {

    // console.log(document.title);

    // document.title = "Hello World";

    // document.body.innerHTML = "<h1>Hello World</h1>";

    // var div = document.getElementById("div");
    // div.innerHTML = "Hello World";

    // var divArr = document.getElementsByClassName("div");
    // for (var i = 0; i < divArr.length; i++) {
    //     divArr[i].innerHTML = "Item " + i;
    // }

    // var div = document.querySelector("#container .div");
    // div.innerHTML = "Hello";

    var divArr = document.querySelectorAll("#container div");
    for (var i = 0; i < divArr.length; i++) {
        var d = divArr[i];
        d.innerHTML = "Item " + i + ",Click to remove me";
        d.onclick = function () {
            this.parentNode.removeChild(this);
        }
    }
    //
    // var container = document.querySelector("#container");
    // container.innerHTML = container.innerHTML + "<div>New div</div>";
    // var newDiv = document.createElement("div");
    // newDiv.innerHTML = "New div";
    // container.appendChild(newDiv);
    // newDiv.style.backgroundColor = "red";

    // var a = document.createElement("a");
    // a.href = "http://ucai.cn";
    // a.innerHTML = "到优才网站";
    // container.appendChild(a);


})();