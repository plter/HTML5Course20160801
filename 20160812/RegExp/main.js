/**
 * Created by plter on 8/12/16.
 */


(function () {


    // var str = "Hello 2012123 World 5 200 30";

    // str = str.replace(/o/g, "a");
    // console.log(str);

    // var p = /o/g;
    //
    // var result = p.exec(str);
    // console.log(result);
    // result = p.exec(str);
    // console.log(result);

    // var p = /\d/g;
    // var p = /[ol]/g;
    // var p = /[a-f]/g;
    // var p = /[^a-f]/g;
    // var p = /\d+/g;
    // var p = /.{2}/g;
    // var p = /\d{3,}/g;
    // var p = /\d.*/g;
    // var p = /\D/g;
    // var p = /\w/g;
    // var p = /\W/g;
    //
    // while (true) {
    //     var result = p.exec(str);
    //     if (result) {
    //         console.log(result);
    //     } else {
    //         break;
    //     }
    // }


    var email = "aa@aa.com";
    console.log(/\w+@\w+\.\w+/g.test(email));
})();