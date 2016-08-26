/**
 * Created by plter on 8/26/16.
 */
//TypeScript

// (function () {
//
//     var a:string = "Hello World";
//
//     function add(a: number, b: number): number {
//         return a + b;
//     }
//
//     console.log(add(2, 3));
//
// })();


class Hello {
    sayHello() {
        console.log("Hello TypeScript");
    }
}

class Hi extends Hello {
    sayHi() {
        console.log("Hi");
    }

    sayHello() {
        return super.sayHello();
    }
}

(function () {
    var h = new Hello();
    h.sayHello();

    var hi = new Hi();
    hi.sayHi();
})();