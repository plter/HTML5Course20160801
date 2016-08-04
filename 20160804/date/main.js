/**
 * Created by plter on 8/4/16.
 */

(function () {

    var date = new Date();
    console.log(date.getFullYear());
    console.log(date.getMonth() + 1);
    console.log(date.getDay());//获取星期的值
    console.log(date.getDate());//获取月中的某一天的值
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());

    console.log(Date.now());

})();