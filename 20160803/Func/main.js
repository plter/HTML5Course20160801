/**
 * Created by plter on 8/3/16.
 */


// function print0To10() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
//
// print0To10();
// print0To10();

function add(a, b) {
    // console.log(arguments);
    // return arguments[0] + arguments[1];
    return a + b;
}
var c = add(3, 5);
console.log(c);


function addNumber() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

var all = addNumber(1, 2, 5, 10, 20);
console.log("result:" + all);

//求最大值
function max() {
    var max = 0;

    if (arguments.length > 0) {
        max = arguments[0];

        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
    }

    return max;
}

var maxFunc = max;

var maxValue = maxFunc(2, 5, -10, 100, 2, 3);
console.log(maxValue);


var printHelloWorld = function () {
    console.log("Hello World");
};

printHelloWorld();

