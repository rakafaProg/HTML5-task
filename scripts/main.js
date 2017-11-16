(function () {
    "use strict";

    // set elements
    const canvasHTML = document.getElementById('sphereCanvas');
    const radiusHTML = document.getElementById('raduisInput');
    const volumeHTML = document.getElementById('volumeInput');

    // set modules
    const circle = circleModule();
    const drawer = canvasHandler(canvasHTML);

    // set event for submit btn
    document.getElementById('btnSubmit').addEventListener('click', function (e) {
        e.preventDefault();

        // gets radius from the user, and validates it
        let radius = radiusHTML.value;
        let validation = circle.validateRadius(radius, canvasHTML.height, canvasHTML.width);

        if (validation === true) {
            drawer.drowCircle(radius);
            volumeHTML.value = circle.calculateVolume(radius);
        } else {
            // if the validation did not pass - 
            // alert the error from the validation to the client.
            alert(validation);
        }
    });


    // set event for clear btn
    document.getElementById('clear').addEventListener('click', function (e) {
        e.preventDefault();
        drawer.clear();
    });


    // bonus - show circles when loading
    function bonus() {

        let radius = 1;
        setInterval(function () {
            // validate the current radius
            let validation = circle.validateRadius(radius, canvasHTML.height, canvasHTML.width);

            // if valid - drow circle
            if (validation === true) {
                drawer.drowCircle(radius);
                radius++;
            }

        }, 100);
    }

    window.addEventListener('load', bonus);


})();



// not part of the exercise 

function getRandomColor() {
    let r = 0;
    let b = 255;
    let g = 0; //Math.round(Math.random()*255);
    return "rgb(" + r + "," + g + "," + b + ")";
}
