/**
 * Created by plter on 2016/11/8.
 */


(function () {

    $("#form-add-user").submit(function (e) {

        e.preventDefault();

        $.post("/apis/user/add", {
            name: this["name"].value,
            age: this['age'].value
        }).done(function (data) {
            console.log(data);

            if (data.state == 1) {
                location.reload();
            } else {
                alert("无法添加用户");
            }
        }).fail(function (err) {
            console.log(err);
            alert("无法连接服务器");
        });

    });

})();