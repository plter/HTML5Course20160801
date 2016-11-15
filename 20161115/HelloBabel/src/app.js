
class Hello{

	sayHello(){
		console.log("Hello World");
	}
}

var h = new Hello();
h.sayHello();

// function * run() {
// 	console.log("Step 1");
// 	yield;
// 	console.log("Step 2");
// }

// var g = run();
// g.next();

// setTimeout(function () {
// 	g.next();
// },1000);