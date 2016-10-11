/**
 * Created by plter on 10/11/16.
 */

(function () {

    var form = document.querySelector("form");
    var storage = localStorage;
    var dataContainer = document.querySelector("#data-container");
    var list;
    var btnClearData = document.querySelector("#btn-clear-data");

    function addListeners() {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            var key = this["key"].value;
            var value = this["value"].value;
            console.log(key, value);

            storage.setItem(key, value);

            refreshStorageData();
        });

        btnClearData.addEventListener("click", function () {
            storage.clear();
            refreshStorageData();
        });
    }

    function refreshStorageData() {
        //refresh the table

        list.clearData();

        var key;
        for (var i = 0; i < storage.length; i++) {
            key = storage.key(i);
            list.addItem(new ListItem(key, storage.getItem(key)));
        }
    }

    function createTable() {
        list = new List();
        list.onDeleteItem = function (listItem) {
            storage.removeItem(listItem.key);
            refreshStorageData();
        };
        dataContainer.appendChild(list.getHtmlNode());
    }

    function init() {
        createTable();
        addListeners();

        refreshStorageData();
    }

    init();
})();