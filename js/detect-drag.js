var startY = 0;
var endY = 0;

var element = document.getElementById('sao-detect-drag');
element.addEventListener("mousedown", function(e){
    startY = e.clientY;
    console.log("mousedown "+startY);
}, false);
element.addEventListener("mouseup", function(e){
    endY = e.clientY;
    console.log("mouseup "+endY);
    activateOptions(startY, endY);
}, false);