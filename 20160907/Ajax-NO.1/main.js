/**
 * Created by liuyujing on 16/9/5.
 */
$(function () {

    var one = $("<div></div>");
    $("body").append(one);
    one.css({"width":"100","height":"100","background":"red"});

    var title = $("<h1></h1>").css({"text-align": "center"});
    one.append(title);

    var user = {name:"",age:0,sex:"男",des:""};
    one.click(function () {
        /*
        $.getJSON("data.txt",function (data) {
            window.console.log(data);
        });

        $.ajax({
            url:"data.txt",
            method:"GET",
            success:function (data) {
                user = $.parseJSON(data);
                window.console.log(user);
                title.text(user.name);
            },
            error:function (error) {
                window.console.log(error);
            }
        });
         */
        var list = [];

        var deffer = $.Deferred();
        $.ajax({
            url:"http://apis.baidu.com/tngou/food/classify",
            method:"GET",
            timeout:30000,
            async:false,
            cache:true,
            dataType:"json",
            contentType:"text/plain",
            beforeSend:function () {
                // alert("beforeSend");
            },
            headers:{"apikey":"800df6eb77392d2205b55cfccbcc1662"},
            dataFilter:function (data, type) {
                // window.console.log("");
                return data;
            },
            success:function (data) {
                // window.console.log(data);
                window.console.log(data);

                deffer.resolve(data);
            },
            error:function (error) {
                window.console.log(error);
            },
            complete:function () {
                // alert("complete");
            }
        });
        deffer.done(function (data) {
            list = data.tngou;
            // window.console.log(data);
        });
        window.console.log(list);
    });


});
