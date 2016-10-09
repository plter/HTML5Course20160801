/**
 * Created by plter on 10/9/16.
 */

window.ucai = window.ucai || {};


(function () {

    /**
     * @class Button
     * @extends Text
     * @param context
     * @param label
     * @constructor
     */
    function Button(context, label) {
        ucai.Text.call(this, context, label);
    }

    var p = Button.prototype = new ucai.Text();

    p.onDraw = function () {
        ucai.Text.prototype.onDraw.call(this);
    };

    ucai.Button = Button;
})();