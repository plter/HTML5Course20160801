/**
 * Created by plter on 2016/11/3.
 */

window.ucai = window.ucai || {};

(function () {

    function FileListItem(file) {
        this._file = file;
        this._htmlNode = document.createElement("li");
        this._jqNode = $(this._htmlNode);
        this._jqNode.html("<div style='display: flex;'>" +
            "   <div style='flex: 1;'>" + this._file.name + "</div>" +
            "   <div style='width: 160px;' class='progress-bar'></div>" +
            "</div>");
        this._progressBar = this._jqNode.find(".progress-bar");
        this._progressBar.progressbar({value: 0});
    }

    var p = FileListItem.prototype;

    Object.defineProperties(p, {
        htmlNode: {
            get: function () {
                return this._htmlNode;
            }
        }
    });

    p.upload = function () {

        var self = this;

        var xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function (e) {
            self._progressBar.progressbar({value: e.loaded, max: e.total});
        };

        xhr.open("POST", "/apis/upload");
        var fd = new FormData();
        fd.append("file", this._file);
        xhr.send(fd);
    };

    ucai.FileListItem = FileListItem;
})();