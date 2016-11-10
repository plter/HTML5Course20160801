/**
 * Created by plter on 2016/11/10.
 */

(function () {

    var uploadForm = $("#upload-form");
    var nameInput = uploadForm.find("input[name='name']");
    var descriptionInput = uploadForm.find("textarea[name='description']");
    var uploadFileField = uploadForm.find("input[name='photo']");

    uploadFileField.change(function (e) {
        if (this.files.length) {
            var file = this.files[0];
            var fileName = file.name.substring(0, file.name.lastIndexOf("."));

            if (!nameInput.val()) {
                nameInput.val(fileName);
            }

            if (!descriptionInput.html()) {
                descriptionInput.html(fileName);
            }
        }
    });

    uploadForm.submit(function (e) {
        e.preventDefault();

        var formData = new FormData(this);

        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(xhr.responseText);
        };
        xhr.open("POST", "/apis/upload");
        xhr.responseType = "json";
        xhr.send(formData);
    });
})();