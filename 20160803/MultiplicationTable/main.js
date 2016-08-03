/**
 * Created by plter on 8/3/16.
 */


var str;
for (var i = 1; i <= 9; i++) {
    str = "";

    for (var j = 1; j <= i; j++) {
        str += i + "*" + j + "=" + i * j + " ";
    }

    console.log(str);
}