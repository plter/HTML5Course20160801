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

    $(".link-for-delete-user").click(function (e) {
        e.preventDefault();

        $.get(this.href).done(function (data) {
            console.log(data);

            if (data.state == 1) {
                location.reload();
            } else {
                alert("无法删除数据");
            }
        }).fail(function (err) {
            console.log(err);
            alert("无法连接服务器");
        });
    });

    $(".user-form").submit(function (e) {
        e.preventDefault();

        $.post("/apis/user/update", {
            id: this['id'].value,
            name: this["name"].value,
            age: this['age'].value
        }).done(function (data) {
            console.log(data);
            if (data.state == 1) {
                alert("数据已保存");
            } else {
                alert("无法保存数据");
            }
        }).fail(function (err) {
            console.log(err);
            alert("无法连接服务器");
        });

    });
})();