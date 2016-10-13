/**
 * Created by plter on 10/13/16.
 */
const http = require("http");

var server = http.createServer(function (req, res) {
    res.end("<html><head><title>Hello World</title></head><body><h1>Hello World</h1></body></html>")
});

server.listen(8000);