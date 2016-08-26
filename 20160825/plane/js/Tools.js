/**
 * Created by plter on 8/25/16.
 */

(function () {

    window.Tools = {
        pointInRect: function (pointX,
                               pointY,
                               rectX,
                               rectY,
                               rectWidth,
                               rectHeight) {

            return pointX > rectX &&
                pointY > rectY &&
                pointX < rectX + rectWidth &&
                pointY < rectY + rectHeight;
        },

        rectIntersectsRect: function (rect1X,
                                      rect1Y,
                                      rect1Width,
                                      rect1Height,
                                      rect2X,
                                      rect2Y,
                                      rect2Width,
                                      rect2Height) {
            return this.pointInRect(rect1X, rect1Y,
                    rect2X, rect2Y, rect2Width, rect2Height) ||
                this.pointInRect(rect1X + rect1Width, rect1Y,
                    rect2X, rect2Y, rect2Width, rect2Height) ||
                this.pointInRect(rect1X, rect1Y + rect1Height,
                    rect2X, rect2Y, rect2Width, rect2Height) ||
                this.pointInRect(rect1X + rect1Width, rect1Y + rect1Height,
                    rect2X, rect2Y, rect2Width, rect2Height) ||
                this.pointInRect(rect2X, rect2Y,
                    rect1X, rect1Y, rect1Width, rect1Height) ||
                this.pointInRect(rect2X + rect2Width, rect2Y,
                    rect1X, rect1Y, rect1Width, rect1Height) ||
                this.pointInRect(rect2X, rect2Y + rect2Height,
                    rect1X, rect1Y, rect1Width, rect1Height) ||
                this.pointInRect(rect2X + rect2Width, rect2Y + rect2Height,
                    rect1X, rect1Y, rect1Width, rect1Height);
        }
    }

})();