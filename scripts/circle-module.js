function circleModule() {
    "use strict";

    function validateRadius(radius, height, width) {

        
        // validate that there are only numbers
        let myExpration = /^[0-9]*$/;
        let tester = myExpration.exec(radius);
        if (!tester)
            return "Invalid radius. Please use numbers only";


        // validate that the radius is not bigger than the height and width
        radius = radius * 2; 
        
        if (radius > height || radius > width)
            return "Invalid radius. Size restriction";
        
        return true;
    }

    
    function calculateVolume(raduis) {
        let volume = Math.pow(raduis, 3);
        volume = volume * Math.PI * 4;
        volume = volume / 3;
        return volume.toFixed(4);
    }

    return {
        calculateVolume: calculateVolume,
        validateRadius: validateRadius
    };

}
