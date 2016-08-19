/**
 * Created by plter on 8/19/16.
 */


function copyProperties(to, from) {
    for (var propertyName in from) {
        to[propertyName] = from[propertyName];
    }
    return to;
}