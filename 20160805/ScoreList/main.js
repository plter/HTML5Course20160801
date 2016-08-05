/**
 * Created by plter on 8/5/16.
 */

(function () {

    var container = document.getElementById("container");
    var currentTable;
    var asc = true;

    var scoreList = [
        {name: "张三", score: 10},
        {name: "李四", score: 12},
        {name: "王五", score: 9},
        {name: "赵六", score: 15},
        {name: "铁蛋儿", score: 8},
        {name: "狗蛋儿", score: 16}
    ];

    function createElement(tagName, content) {
        var e = document.createElement(tagName);
        if (content) {
            e.innerHTML = content;
        }
        return e;
    }

    function scoreLinkClickedHandler() {
        var tmp;
        for (var i = 0; i < scoreList.length; i++) {
            for (var j = i + 1; j < scoreList.length; j++) {
                if ((asc && scoreList[i].score > scoreList[j].score)
                    || (!asc && scoreList[i].score < scoreList[j].score)) {
                    tmp = scoreList[i];
                    scoreList[i] = scoreList[j];
                    scoreList[j] = tmp;
                }
            }
        }

        asc = !asc;

        refreshTable();
    }

    function refreshTable() {
        if (currentTable) {
            container.removeChild(currentTable);
        }

        currentTable = generateTableByScoreList();
        container.appendChild(currentTable);
    }

    function generateTableByScoreList() {
        var table = createElement("table");

        var tr = createElement("tr");
        tr.appendChild(createElement("th", "名字"));
        var th = createElement("th");
        tr.appendChild(th);
        var a = createElement("a", "分数");
        a.href = "#";
        a.onclick = scoreLinkClickedHandler;
        th.appendChild(a);
        table.appendChild(tr);

        for (var i = 0; i < scoreList.length; i++) {
            var student = scoreList[i];

            tr = createElement("tr");
            tr.appendChild(createElement("td", student.name));
            tr.appendChild(createElement("td", student.score));
            table.appendChild(tr);
        }

        return table;
    }

    function init() {
        refreshTable();
    }

    init();
})();