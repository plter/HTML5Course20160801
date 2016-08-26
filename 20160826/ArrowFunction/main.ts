/**
 * Created by plter on 8/26/16.
 */

(function () {

    // var f = function (a: number, b: number): number {
    //     return a + b;
    // };
    //
    // var fun: (a: number, b: number)=>number = f;

    var formatTime = (time: number)=> (time >= 10 ? "" : "0") + time;

    var f = (a: number, b: number)=> a + b;

    console.log(f(2, 3));
})();