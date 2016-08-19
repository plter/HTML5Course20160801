/**
 * Created by plter on 8/19/16.
 */


function copyProperties(to, from) {
    for (var k in from) {
        to[k] = from[k];
    }
    return to;
}