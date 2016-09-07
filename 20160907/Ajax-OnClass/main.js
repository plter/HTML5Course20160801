/**
 * Created by liuyujing on 16/9/7.
 */

$(function () {
/*
    $.ajax({
        url:"data.txt",
        method:"GET",
        success:function (data,code) {
            window.console.log(data);
        },
        error:function (data,code) {
            window.console.log(data);
        }
    });
*/
    /*
    var nameView = $("<div></div>").css({"width":"200px","height":"200px","background":"green"});
    $("body").append(nameView);
    nameView.click(function () {
        $.ajax({
            url:"data.txt",
            success:function (data,code) {
                window.console.log(data);
                nameView.text(data);
            },
            error:function (data,code) {
                window.console.log(data);
            }
        });
    });

    */

    /*
    var userInfo = {name:"",age:0,sex:"",des:""};
    var nameView = $("<div></div>").css({"width":"200px","height":"200px","background":"green"});
    $("body").append(nameView);
    nameView.click(function () {
        $.ajax({
            url:"data.txt",
            success:function (data,code) {
                window.console.log(data);
                userInfo = $.parseJSON(data);
                nameView.text(userInfo.name);
            },
            error:function (data,code) {
                window.console.log("error"+data);
            }
        });
    });
    */

    // $.Deferred(); 延迟
    //resolve 什么时候  可以执行Deferred中的回调方法 的方法
    //延迟加载Deferred中的回调方法
    //done(funcation(data){});
    //then()

    //1.初始化Deferred对象
    //2.通过resolve结束延迟
    //3.调用回调方法

    // 1.初始化Deferred对象
    var def = $.Deferred();

    var nameView = $("<div></div>").css({"width":"200px","height":"200px","background":"green"});
    $("body").append(nameView);
    nameView.click(function () {
        var nameString = ".";
        $.ajax({
            url:"http://apis.baidu.com/baidunuomi/openapi/categories",
            headers:{"apikey":"800df6eb77392d2205b55cfccbcc1662"},
            timeout:3000,//超时设置的时间
            // cache:true,//默认true
            // // dataType:"json",
            // beforeSend:function () {
            //     alert("准备开始请求数据");
            // },
            // dataFilter:function (data) {
            //     alert("返回给原始数据之前 调用");
            // },
            async:false,//是否异步请求
            // processData:true,
            // complete:function (data) {
            //     window.console.log(data);
            // },//只要请求完成  就会 调用 这个回调方法 （不管成功 或者失败）
            success:function (data,code) {
                //2.结束延迟
                def.resolve(data);

                // window.console.log(data);

                // for (var i=0;i<data.categories.length;i++){
                //     var item = data.categories[i];
                // }


                //接口?key=值&key=值
                /*
                for (var item in data.categories){
                    // window.console.log(data.categories[item]);
                    var category = data.categories[item];//大的分类
                    window.console.log(category);
                    var classObjs = category.subcategories; //详细的分类
                    window.console.log(classObjs);

                    for (var classObj in classObjs){
                        window.console.log(classObjs[classObj].subcat_name);//详细分类中的名字
                    }

                }
                */
                nameString = data.categories[1].cat_name;
            },
            error:function (data,code) {
                window.console.log("error"+data);
            }
        });
        // window.console.log("后面打印的内容"+nameString);
        nameView.text(nameString);
    //    延迟...
        def.done(function (data) {
            window.console.log(data);
            nameView.text(data.categories[1].cat_name);
        });
    });

    
});
