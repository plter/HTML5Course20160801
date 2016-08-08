/**
 * Created by plter on 8/8/16.
 */

(function () {

    var index = 0;
    var images = ["01.png", "02.png", "03.jpg"];
    var img = document.getElementById("img");

    setInterval(function () {
        index++;
        if (index >= images.length) {
            index = 0;
        }

        img.src = images[index];
    }, 3000);

})();