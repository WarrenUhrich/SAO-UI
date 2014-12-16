var startY = 0;
var endY = 0;

var dragArea = document.getElementById('sao-detect-drag');
dragArea.addEventListener("mousedown", function(e){
    startY = e.clientY;
}, false);
dragArea.addEventListener("mouseup", function(e){
    endY = e.clientY;
    activateOptions(startY, endY);
}, false);