/**
 * Created by plter on 2016/11/3.
 */

const mysql = require("mysql");

module.exports = function () {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mydb"
    });
};
