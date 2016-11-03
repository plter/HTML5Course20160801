/**
 * Created by plter on 2016/11/3.
 */

(function () {

    $("#users-list").find(".link-delete").click(function (e) {
        e.preventDefault();

        console.log(this.href);

        $.get(this.href).done(function (data) {
            console.log(data);
            if (data.state == 1) {
                location.reload();
            } else {
                alert("删除数据失败");
            }
        });
    });

    $("#form-add").submit(function (e) {
        e.preventDefault();

        $.post("/apis/adduser", {
            user: this["user"].value,
            pass: this["pass"].value,
            age: this["age"].value
        }).done(function (data) {
            console.log(data);

            if (data.state == 1) {
                location.reload();
            }
        });
    });

})();