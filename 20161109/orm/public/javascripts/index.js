/**
 * Created by plter on 2016/11/9.
 */

(function () {

    $("#add-user-form").submit(function (e) {
        e.preventDefault();

        $.post("/users/add", {
            name: this['name'].value,
            age: this['age'].value
        }).done(function (data) {
            console.log(data);
            if (data.state == 1) {
                location.reload();
            } else {
                alert("无法保存数据");
            }
        }).fail(function (err) {
            console.log(err);
            alert("无法连接服务器");
        });
    });

})();