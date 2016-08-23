/**
 * Created by plter on 2016/8/23.
 */


(function () {

    // var city = {cityName:"杭州"};
    // city.sayHello = function() {
    //     console.log("你好："+this.cityName);
    // };
    // sayHello.call(city);
    // city.sayHello();

    // var btn = document.createElement("button");
    // btn.innerHTML = "Click me";
    // document.body.appendChild(btn);
    //
    // btn.onclick = function () {
    //     console.log(this);
    // }

    // setTimeout(function () {
    //     console.log(this);
    // },1000);

    // var s = new Student("张三",10,"男");
    // s.sayHelloDelay();

    var s = new GirlStudent("丽丽",12);
    // console.log(s.getGender());
    s.sayHello();
    s.sayHi();
})();