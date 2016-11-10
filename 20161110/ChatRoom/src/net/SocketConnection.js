/**
 * Created by plter on 2016/11/10.
 */

function removeObjectFromArray(obj, arr) {
    var index = arr.indexOf(obj);
    if (index != -1) {
        arr.splice(index, 1);
    }
}

class SocketConnection {

    constructor(socket) {

        this._socket = socket;

        SocketConnection.allConnections.push(this);

        socket.on("chat", function (data) {
            SocketConnection.allConnections.forEach(sc=> {
                sc.socket.emit("chat", data);
            });
        });

        socket.on("disconnect", ()=> {
            removeObjectFromArray(this, SocketConnection.allConnections);
        });
    }

    get socket() {
        return this._socket;
    }
}

SocketConnection.allConnections = [];

module.exports = SocketConnection;