/**
 * Created by plter on 8/11/16.
 */


(function () {

    var obj = {name: "ucai", age: 10};

    for (var key in obj) {
        console.log(key, obj[key]);
    }

    // console.log(obj.hasOwnProperty("name"));//判断对象中是否有该成员


    // var map = new Map();
    // map.set("name", "ucai");
    // map.set("age", 10);
    //
    // console.log(map);

})();