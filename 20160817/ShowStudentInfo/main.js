/**
 * Created by plter on 8/17/16.
 */

(function () {

    function createStudent(name, age, gender) {

        var self = {name: name, age: age, gender: gender};

        self.createHTMLElement = function () {
            var div = document.createElement("div");
            var a = document.createElement("a");
            a.innerHTML = self.name;
            a.href = "#";
            a.onclick = function () {
                alert("名字:" + self.name + "\n年龄:" + self.age + "\n性别:" + self.gender);
            };
            div.appendChild(a);
            return div;
        };

        return self;
    }

    var students = [
        createStudent("张三", 10, "男"),
        createStudent("李四", 12, "男"),
        createStudent("丽丽", 9, "女")
    ];

    for (var i = 0; i < students.length; i++) {
        document.body.appendChild(students[i].createHTMLElement());
    }
})();