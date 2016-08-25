/**
 * Created by plter on 8/25/16.
 */

(function () {

    window.Ticker = {
        _handlers: [],
        _intervalId: -1/*自定义的初始值,指定如果是-1,则表示当前没有运行计时器*/,

        addListener: function (tickHandler) {
            this._handlers.push(tickHandler);
        },

        removeListener: function (tickHandler) {
            this._handlers.removeItem(tickHandler);
        },

        start: function () {
            if (!this.running) {
                this._intervalId = setInterval(function () {
                    for (var i = 0; i < this._handlers.length; i++) {
                        this._handlers[i]();
                    }
                }.bind(this), 20);
            }
        },

        stop: function () {
            if (this.running) {
                clearInterval(this._intervalId);
                this._intervalId = -1;
            }
        },

        get running() {
            return this._intervalId != -1;
        }
    };
})();