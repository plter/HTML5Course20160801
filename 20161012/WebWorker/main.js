/**
 * Created by plter on 10/12/16.
 */


(function () {

    var btnRun = document.querySelector("#btn-run-program");
    var btnShowAlert = document.querySelector("#btn-show-alert");
    var divProgress = document.querySelector("#progress");

    btnRun.onclick = function () {
        var worker = new Worker("printNumbers.js");
        worker.onmessage = function (e) {
            divProgress.innerHTML = e.data;
        };
        worker.postMessage("start");
    };

    btnShowAlert.onclick = function () {
        alert("这是个对话框");
    };

})();