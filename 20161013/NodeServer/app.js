/**
 * Created by plter on 10/13/16.
 */


const http = require("http");

http.createServer(function (req, res) {
    res.end("<h1>Hello World</h1>")
}).listen(8000);