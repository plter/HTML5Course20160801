/**
 * Created by plter on 10/11/16.
 */


(function () {

    /**
     * @class ListItem
     * @constructor
     */
    function ListItem(key, value) {
        this._key = key;
        this._value = value;

        this._htmlNode = document.createElement("tr");

        this._keyCol = document.createElement("td");
        this._keyCol.innerHTML = key;
        this._htmlNode.appendChild(this._keyCol);

        this._valueCol = document.createElement("td");
        this._valueCol.innerHTML = value;
        this._htmlNode.appendChild(this._valueCol);

        this._btnDelete = document.createElement("button");
        this._btnDelete.innerHTML = "删除";
        this._htmlNode.appendChild(this._btnDelete);
        this._btnDelete.onclick = function () {
            if (this.onDelete) {
                this.onDelete(this);
            }
        }.bind(this);
    }

    var p = ListItem.prototype;

    p.getHtmlNode = function () {
        return this._htmlNode;
    };

    Object.defineProperties(p, {
        key: {
            get: function () {
                return this._key;
            }
        },
        value: {
            get: function () {
                return this._value;
            }
        }
    });

    window.ListItem = ListItem;

})();