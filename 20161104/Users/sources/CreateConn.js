/**
 * Created by plter on 2016/11/4.
 */

const mysql = require("mysql");

/**
 * @returns {Connection}
 */
module.exports = function () {
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "us"
    });

    conn.connect1 = function () {
        return new Promise(function (resovle, reject) {
            conn.connect(function (err) {
                if (!err) {
                    resovle(conn);
                } else {
                    reject(err);
                }
            });
        });
    };

    return conn;
};