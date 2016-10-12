/**
 * Created by plter on 10/12/16.
 */

(function () {

    var target = document.querySelector("#target");

    target.addEventListener("dragover", function (e) {
        e.preventDefault();

    });

    target.addEventListener("drop", function (e) {
        e.preventDefault();

        // console.log(e.dataTransfer.files);

        var files = e.dataTransfer.files;
        var reader;

        if (files && files.length) {
            var file = files[0];

            switch (file.type) {
                case "text/plain":
                    reader = new FileReader();
                    reader.onload = function () {
                        target.innerHTML = reader.result;
                    };
                    reader.readAsText(file);
                    break;
                case "image/jpeg":
                    reader = new FileReader();
                    reader.onload = function () {
                        target.innerHTML = "<img src='" + reader.result + "'>";
                    };
                    reader.readAsDataURL(file);
                    break;
                default:
                    console.log(file);
                    break;
            }
        }
    });

})();