function canvasHandler(canvas) {
    "use strict";
    
    // set canvas basic data
    let context = canvas.getContext('2d');
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    
    let drowCircle = function (radius) {
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        // set a color to the circle. not a part of the task
        context.strokeStyle = getRandomColor(); 
        context.stroke();
    };

    let clear = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    return {
        drowCircle: drowCircle,
        clear: clear
    };
}