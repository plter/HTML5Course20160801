/**
 * Created by plter on 10/10/16.
 */

(function () {

    var context = document.getElementById("canvas").getContext("2d");
    var image = document.getElementById("image");


    (function render() {

        // context.drawImage(image, 0, 0, 100, 100);

        context.drawImage(image, 50, 50, 110, 110, 0, 0, 110, 110);

        requestAnimationFrame(render);
    })();


})();