/**
 * Created by plter on 2016/8/22.
 */


(function () {
    
    document.oncontextmenu = function (e) {
        console.log(e);

        e.preventDefault();
    }
    
})();