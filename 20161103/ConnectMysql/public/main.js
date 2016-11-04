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

    $(".user-form").submit(function (e) {
        e.preventDefault();
        console.log(this['id'].value, this['user'].value, this['age'].value);

        $.post("/apis/update", {
                id: this['id'].value,
                user: this['user'].value,
                age: this['age'].value
            }
        ).done(function (data) {
            console.log(data);
            if (data.state == 1) {
                alert("保存成功");
            } else {
                alert("保存失败");
            }
        }).fail(function () {
            alert("保存失败")
        });
    });

})();