/**
 * Created by plter on 10/11/16.
 */

(function () {

    function List() {
        this._htmlNode = document.createElement("table");

        this.addTableHeader();
    }

    var p = List.prototype;

    p.clearData = function () {
        this._htmlNode.innerHTML = "";
        this.addTableHeader();
    };


    p.addTableHeader = function () {
        var header = document.createElement("tr");
        var col = document.createElement("th");
        col.innerHTML = "键";
        header.appendChild(col);

        col = document.createElement("th");
        col.innerHTML = "值";
        header.appendChild(col);

        col = document.createElement("th");
        col.innerHTML = "操作";
        header.appendChild(col);

        this._htmlNode.appendChild(header);
    };

    /**
     * @param {ListItem} item
     */
    p.addItem = function (item) {
        this._htmlNode.appendChild(item.getHtmlNode());

        item.onDelete = this._onListItemDelete.bind(this);
    };

    /**
     * @param listItem
     * @private
     */
    p._onListItemDelete = function (listItem) {
        if (this.onDeleteItem) {
            this.onDeleteItem(listItem);
        }
    };

    p.removeItem = function (item) {
        this._htmlNode.removeChild(item.getHtmlNode());
    };

    p.getHtmlNode = function () {
        return this._htmlNode;
    };

    window.List = List;
})();