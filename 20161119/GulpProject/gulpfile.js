/**
 * Created by plter on 2016/11/19.
 */

require("./SubProject/gulpfile");

const gulp = require("gulp");

gulp.task("default", ["SubProject"], function () {
    console.log("build GulpProject");
});

