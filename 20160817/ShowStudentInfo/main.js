/**
 * Created by plter on 8/17/16.
 */

(function () {

    function CreateStudent(name, age, gender) {

        var self = {name: name, age: age, gender: gender};

        self.getNode = function () {
            return self.htmlNode;
        };

        function createHtmlNode() {
            self.htmlNode = document.createElement("div");
            var a = document.createElement("a");
            a.innerHTML = self.name;
            a.href = "#";
            a.onclick = function () {
                alert("名字:" + self.name + "\n年龄:" + self.age + "\n性别:" + self.gender);
            };
            self.htmlNode.appendChild(a);

            var closeBtn = document.createElement("button");
            closeBtn.innerHTML = "Close";
            self.htmlNode.appendChild(closeBtn);
            closeBtn.onclick = function () {
                self.htmlNode.parentNode.removeChild(self.htmlNode);
            }
        }

        function init() {
            createHtmlNode();
        }

        init();

        return self;
    }

    var students = [
        CreateStudent("张三", 10, "男"),
        CreateStudent("李四", 12, "男"),
        CreateStudent("丽丽", 9, "女")
    ];

    console.log(students);

    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        document.body.appendChild(student.getNode());
    }
})();