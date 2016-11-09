/**
 * Created by plter on 2016/11/9.
 */

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-closure-compiler');


    grunt.initConfig({
        'closure-compiler': {
            build_es6: {
                closurePath: 'tools',
                js: ['Hello.js', 'Main.js'],
                jsOutputFile: 'main.min.js',
                options: {}
            }
        }
    });

    grunt.registerTask('default', ['closure-compiler:build_es6']);


    // grunt.registerTask("build", function () {
    //     console.log("Run build task");
    // });
    //
    // grunt.registerTask("Task1", function () {
    //     console.log("Task 1");
    // });
    //
    // grunt.registerTask("Task2", function () {
    //     console.log("Task 2");
    // });
    //
    //

};