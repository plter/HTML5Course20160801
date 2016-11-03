/**
 * Created by plter on 2016/11/3.
 */

window.ucai = window.ucai || {};

(function () {

    function FileList(files) {
        this._htmlNode = document.createElement("ul");
        this._items = [];

        var item;
        for (var i = 0; i < files.length; i++) {
            item = new ucai.FileListItem(files[i]);
            this._items.push(item);
            this.addItem(item);
        }
    }

    var p = FileList.prototype;

    Object.defineProperties(p, {
        htmlNode: {
            get: function () {
                return this._htmlNode;
            }
        },
        items: {
            get: function () {
                return this._items;
            }
        }
    });

    p.addItem = function (item) {
        this.htmlNode.appendChild(item.htmlNode);
    };

    p.upload = function () {
        this.items.forEach(function (item) {
            item.upload();
        });
    };

    ucai.FileList = FileList;
})();