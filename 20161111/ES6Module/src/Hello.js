/**
 * Created by plter on 2016/11/11.
 */

class Hello {

    sayHello() {
        console.log("Hello");
    }

    sayHi() {
        console.log("Hi 1");
    }
}

class Hi {
    sayHi() {
        console.log("Hi 2");
    }
}

// export default Hello;
export {Hello, Hi};