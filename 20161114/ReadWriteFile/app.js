/**
 * Created by plter on 2016/11/14.
 */

var fs = require("fs");

// fs.writeFile("data.txt", "Hello World", function (err) {
//     if (!err) {
//         console.log("Write success");
//     } else {
//         console.log("Can not write file");
//     }
// });

fs.readFile("data.txt", function (err, data) {
    if (!err) {
        console.log(data.toString());
    } else {
        console.log("Can not read file");
    }
});