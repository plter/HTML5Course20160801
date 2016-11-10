/**
 * Created by plter on 2016/11/10.
 */

(function () {

    var socket = io(location.origin);

    var chatOut = document.querySelector("#ta-chat-out");
    var chatInputForm = document.querySelector("#form-chat-input");

    chatInputForm.addEventListener("submit", function (e) {
        e.preventDefault();

        socket.emit("chat", {
            name: this['name'].value,
            message: this['chat-input'].value
        });

        this['chat-input'].value = "";
    });

    socket.on("chat", function (data) {
        chatOut.innerHTML += data.name + ":\n" + data.message + "\n";
        chatOut.scrollTop = chatOut.scrollHeight;
    });

})();