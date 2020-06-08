$(document).ready(function() {
// Grabs id of canvas and it's current context
window.bingoWindow = document.getElementById("daubers");
window.windowContext = bingoWindow.getContext("2d");

// Variable for the X and Y position of the mouse
var mouse = {x:0,y:0};

// Variable to hold current image
var img = new Image();

img.src = "img/daubers/nerfThis.png";

// Variable to hold audio clip
var dauberStamp = new Audio("audio/HeyDaddyo.ogg");

//window.addEventListener('mousedown', mHandler);

bingoWindow.onclick = function(event){
    var x = Math.round(event.offsetX - img.width/2);
    var y = Math.round(event.offsetY - img.height/2);
    windowContext.drawImage(img,x,y);
    dauberStamp.play();
    console.log("x-coordinate: " + x + " | " + "y-coordinate: " + y);
};
// function mHandler(event) {
//     mouse.x = event.pageX;
//     mouse.y = event.pageY;
// }

// function main() {
//     windowContext.drawImage(img, 50, 50);
// }

// setInterval(main, 1000/60);
});

function clearWindow() {
    windowContext.clearRect(0,0,bingoWindow.width,bingoWindow.height);
    console.log("Cleared.");
}