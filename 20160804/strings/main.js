/**
 * Created by plter on 8/4/16.
 */

(function () {

    // var str = "Hello World";

    // str = str.substr(1, 3);//substr 第一个参数指开始截取的位置,第二个参数指截取的长度
    // str = str.substring(1, 3);//substring 第一个参数指开始截取的位置,第二个参数指截取结束的位置
    // console.log(str.charAt(0));

    // str = str.replace("o", "a");

    // str = str.replace(/o/g, "a");

    // str = str.toUpperCase();
    // str = str.toLowerCase();

    // var index = str.indexOf("l", 5);

    // console.log(str);


    // var str = "A string representing the value to search for";
    //
    // var words = str.split(" ");
    // console.log(words);

    // var numStr = "3.14";

    // var num = parseInt(numStr);
    // var num = parseFloat(numStr);

    // console.log(num);

    var str = "Hello World";
    // var index = str.indexOf("", 1);
    var words = str.split("").reverse().join("");
    console.log(words);

})();