/**
 * Created by plter on 8/11/16.
 */


(function () {


    function makeString(theString, params) {

        var start, end;
        while (true) {
            start = theString.indexOf("${");
            if (start != -1) {
                end = theString.indexOf("}", start);

                var key = theString.substring(start + 2, end);
                theString = theString.substring(0, start)
                    + params[key] + theString.substring(end + 1);
            } else {
                break;
            }
        }
        return theString;
    }

    console.log(makeString("Hello ${name},${age}",
        {name: "ucai", age: 10}));

})();