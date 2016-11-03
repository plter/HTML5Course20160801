/**
 * Created by plter on 2016/11/3.
 */

(function () {

    var currentList;

    $("#container").on("dragenter", function (e) {
        e.preventDefault();
    }).on("dragover", function (e) {
        e.preventDefault();
    }).on("drop", function (e) {
        e.preventDefault();

        console.log(e.originalEvent.dataTransfer.files);

        currentList = new ucai.FileList(e.originalEvent.dataTransfer.files);
        $(this).empty().append(currentList.htmlNode);
    });

    $("#btn-start-upload").on("click", function () {
        currentList.upload();
    });


})();