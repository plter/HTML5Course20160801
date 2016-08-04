/**
 * Created by plter on 8/4/16.
 */


(function () {

    //键值对
    // var obj = {name: "ucai", age: 10};
    var obj = {};
    obj.name = "ucai";
    obj.age = 10;

    //删除对象成员
    // delete obj.name;

    console.log(obj);

    obj["name"] = "ucai001";
    console.log(obj["name"]);

})();