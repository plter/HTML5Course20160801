/**
 * Created by plter on 8/3/16.
 */


console.log(1);

var line;
var value;
for (var i = 2; i <= 8; i++) {
    line = "1 ";
    value = 1;

    for (var j = 1; j < i; j++) {
        value = (i - j) * value / j;

        line += value + " ";
    }

    console.log(line);
}