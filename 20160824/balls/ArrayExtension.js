/**
 * Created by plter on 2016/8/24.
 */

(function () {

    Array.prototype.removeItem = function (item) {
        var index = this.indexOf(item);
        if (index != -1) {
            this.splice(index, 1);
        }
    };
    
})();