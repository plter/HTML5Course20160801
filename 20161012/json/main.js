/**
 * Created by plter on 10/12/16.
 */

(function () {

    var jsonStr = "[{\"name\":\"王小岁\"},1,2,3,\"Hello World\",[\"ucai\",\"学院\"]]";

    // var jsonStr = "{\"name\":\"ucai\"}";

    var json = JSON.parse(jsonStr);

    console.log(JSON.stringify(json));


})();