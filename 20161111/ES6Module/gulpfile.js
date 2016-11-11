/**
 * Created by plter on 2016/11/11.
 */

const gulp = require("gulp");
const closureCompiler = require("gulp-closure-compiler");

const buildDir = "build";

gulp.task("copy_html_files", function () {
    return gulp.src("src/*.html").pipe(gulp.dest(buildDir));
});

gulp.task("compile_js_files", function () {
    return gulp.src([
        "src/Hello.js",
        "src/Main.js"
    ]).pipe(closureCompiler({
        compilerPath: "tools/compiler.jar",
        fileName: "main.min.js"
    })).pipe(gulp.dest(buildDir));
});

gulp.task("default", ['copy_html_files', "compile_js_files"]);

gulp.watch("src/*.html", ["copy_html_files"]);
gulp.watch("src/*.js", ['compile_js_files']);