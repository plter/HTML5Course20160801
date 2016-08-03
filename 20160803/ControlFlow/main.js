/**
 * Created by plter on 8/3/16.
 */


var score = 45;

// if (score == 100) {
//     console.log("满分");
// } else if (score >= 90) {
//     console.log("优秀");
// } else if (score >= 80) {
//     console.log("良好");
// } else if (score >= 60) {
//     console.log("及格");
// } else {
//     console.log("不及格");
// }


//switch case 用于判断可枚举的数据类型
switch (Math.floor(score / 10)) {
    case 10:
        console.log("满分");
        break;
    case 9:
        console.log("优秀");
        break;
    case 8:
        console.log("良好");
        break;
    case 7:
    case 6:
        console.log("及格");
        break;
    default:
        console.log("不及格");
        break;
}