/**
 * Created by plter on 11/7/16.
 */

(function () {

    $("#form-edit-post").submit(function (e) {
        e.preventDefault();

        $.post("/apis/post/add", {
            title: this["title"].value,
            content: this['content'].value
        }).done(function (data) {
            console.log(data);

            if (data.state == 1) {
                alert("发布成功");
            } else {
                alert("发布失败");
            }
        }).fail(function () {
            alert("无法连接服务器");
        });
    });

})();