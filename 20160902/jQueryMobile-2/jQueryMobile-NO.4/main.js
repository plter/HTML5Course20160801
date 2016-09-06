/**
 * Created by liuyujing on 16/9/1.
 */
$(function () {

    var buttonList = ["#button1","#button2","#button3"];
    for (var i=0;i<buttonList.length;i++){
        $(buttonList[i]).on("tap",function () {
            alert("您选择的是"+$(this).text());
        });
    }

});
