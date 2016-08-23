/**
 * Created by plter on 2016/8/23.
 */

(function () {
    /**
     * 原始数据类型
     * 1. Number
     * 2. String
     * 3. Undefined 只有一个值是 undefined
     * 4. Null 只有一个值是 null
     * 5. Boolean true false
     */


    // var a = "Hello";
    // var b = a;
    // b = "World";


    var a = {number:10};
    var b = a;

    b.number = 20;
    
    console.log(a.number,b.number);
})();