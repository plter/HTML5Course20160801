/**
 * Created by liuyujing on 16/9/2.
 */
$(function () {

    $("#tttt").on("tap",function () {
        alert("OK");
    });

    $("#friendView").on("scroll",function () {
        window.console.log("friendView");
    });

    // $("#test").on("taphold",function (event,ui) {
    //     alert("长按触发");
    //     // window.console.log(event);
    // });

    // $("#test").on("swipe",function () {
    //     window.console.log("swiping~");
    // });

    //swiperight
    // $("#test").on("swipeleft",function () {
    //     window.console.log("swiping~swipeleft~");
    // });

    $("#test").on("scrollstart",function () {
        window.console.log("scrollstart");
    });

    $("#test").on("scrollstop",function () {
        window.console.log("scrollstop");
    });
});
