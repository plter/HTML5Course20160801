/**
 * Created by plter on 2016/11/9.
 */

(function () {

    function decodeUrlParams(url) {
        var result = {};

        var startIndex = url.indexOf("?");
        if (startIndex > -1) {
            var queryString = url.substring(startIndex + 1);

            var kvStrings = queryString.split("&");

            for (var i = 0; i < kvStrings.length; i++) {
                var kv = kvStrings[i].split("=");
                result[kv[0]] = kv[1];
            }
        }
        return result;
    }

    function getUrlWithoutParams(url) {
        var index = url.indexOf("?");
        if (index == -1) {
            index = url.indexOf("#");
        }
        if (index == -1) {
            return url;
        } else {
            return url.substring(0, index);
        }
    }

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


    $(".btn-delete").click(function (e) {
        e.preventDefault();

        $.post(getUrlWithoutParams(this.href), decodeUrlParams(this.href)).done(function (data) {

            console.log(data);
            if (data.state == 1) {
                location.reload();
            } else {
                alert("无法删除该数据");
            }
        }).fail(function (err) {
            console.log(err);
            alert("无法连接服务器");
        });
    });
})();