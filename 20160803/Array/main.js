/**
 * Created by plter on 8/3/16.
 */


// var arr = [2, 2, 2, 2, "Hello", "ucai", []];
var arr = [];
arr.push("Hello");
arr.push(2);
arr.push("ucai");
arr.push(3);
arr.push("ucai");
arr.push("ucai");
arr.push("ucai");
arr.push("ucai");

// console.log(arr);
//
// arr[1] = 3;
// console.log(arr);

// arr.pop();
// console.log(arr);
//
// arr.shift();
// console.log(arr);

/**
 * 第一个参数 指开始删除的索引位置
 * 第二个参数 指删除几项
 * 从第三个参数开始 指向数组中添加的元素
 */
// arr.splice(1, 0, "33", "你好");
// console.log(arr);

//对数据进行遍历
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// //ES5 新特性用于遍历数据
// arr.forEach(
//     /**
//      * @param item 当前的数据
//      * @param index 当前数据所在的索引位置
//      * @param thisArr 被遍历的数组
//      */
//     function (item, index, thisArr) {
//         console.log(item);
//     }
// );

//清空数组
// arr = [];
// arr.splice(0, arr.length);
// // arr.length = 0;
// console.log(arr);


//元素检索
// console.log(arr.indexOf("ucai"));
// console.log(arr.lastIndexOf("ucai"));

//根据元素删除数组项

// var index = arr.indexOf("ucai");
// if (index != -1) {
//     arr.splice(index, 1);
// }

for (var i = 0; i < arr.length;) {
    if (arr[i] == "ucai") {
        arr.splice(i, 1);
    } else {
        i++;
    }
}

console.log(arr);