/**
 * Created by plter on 2016/11/10.
 */

const gulp = require("gulp");
const minify = require("gulp-minify");
const concat = require("gulp-concat");

const buildDirName = "build";

gulp.task("copy_html_files", function () {
    return gulp.src("src/*.html").pipe(gulp.dest(buildDirName));
});

gulp.task("compile_js_files", function () {
    return gulp.src([
        "src/Hello.js",
        "src/Main.js"
    ])
        .pipe(concat("index.js"))
        .pipe(minify())
        .pipe(gulp.dest(buildDirName));
});

gulp.task("default", ["copy_html_files", "compile_js_files"]);

gulp.watch("src/*.html", ["copy_html_files"]);
gulp.watch("src/*.js", ["compile_js_files"]);