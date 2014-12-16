// var startY = 0;
// var endY = 0;

// var element = document.getElementById('sao-detect-drag');
// element.addEventListener("mousedown", function(e){
//     startY = e.clientY;
//     console.log("mousedown "+startY);
// }, false);
// element.addEventListener("mouseup", function(e){
//     endY = e.clientY;
//     console.log("mouseup "+endY);
//     activateOptions(startY, endY);
// }, false);

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            console.log('left swipe');
        } else {
            console.log('right swipe');
        }                       
    } else {
        if ( yDiff > 0 ) {
            console.log('up swipe'); 
        } else { 
            console.log('down swipe');
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};