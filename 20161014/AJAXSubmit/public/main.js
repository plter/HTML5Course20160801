/**
 * Created by plter on 10/14/16.
 */


(function () {

    $("form").on("submit", function (e) {
        e.preventDefault();

        // console.log(this["name"].value, this.action, this.method);

        $.post(this.action, {name: this["name"].value}).done(function (data) {
            $("#result").html(data);
        }).fail(function (err) {
            alert("无法连接服务器");
        });
    });

})();