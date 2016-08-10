/**
 * Created by plter on 8/10/16.
 */

(function () {

    var eyeballPositionY = 88;
    var leftEyeballGlobalPositionX = 57;
    var rightEyeballGlobalPositionX = 157;
    var R = 15;
    var eyeBallStartX = 20;
    var eyeBallStartY = 20;
    var leftEye = document.querySelector(".left .eyeball");
    var rightEye = document.querySelector(".right .eyeball");


    function setEyeballPosition(eye, dx, dy) {
        var angle = Math.atan(dy / dx);
        var direction = dx >= 0 ? 1 : -1;
        var eyeX = eyeBallStartX + R * Math.cos(angle) * direction;
        var eyeY = eyeBallStartY + R * Math.sin(angle) * direction;
        eye.style.left = eyeX + "px";
        eye.style.top = eyeY + "px";
    }


    document.addEventListener("mousemove", function (event) {
        setEyeballPosition(leftEye, event.pageX - leftEyeballGlobalPositionX, event.pageY - eyeballPositionY);
        setEyeballPosition(rightEye, event.pageX - rightEyeballGlobalPositionX, event.pageY - eyeballPositionY);
    });

})();