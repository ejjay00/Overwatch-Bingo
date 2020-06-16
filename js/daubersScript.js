$(document).ready(function() {
// Grabs id of canvas and it's current context
window.bingoWindow = document.getElementsByTagName("bingoWindow");

// Variable for the X and Y position of the mouse
var mouse = {x:0,y:0};

// Variable to hold current image
var img = new Image();

img.src = "img/daubers/nerfThis.png";

// Variables to hold audio clips
var dauberStamp = new Audio("audio/HeyDaddyo.ogg");
var victory = new Audio();
var clapping = new Audio();

// On click, find specific clicked element with class name Cell, draw Dauber
// then append as child
var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].onclick = function(e) {
            var x = e.offsetX - img.width/2;
            var y = e.offsetY - img.height/2;
            var c = document.createElement("canvas");
            c.classList.add("daub");
            c.style.left = e.clientX - x + "px";
            c.style.top = e.clientY - y + "px";
            c.setAttribute("height", "120");
            c.setAttribute("width", "120");
            var ctx = c.getContext('2d');
            ctx.drawImage(img, x, y);
            dauberStamp.play();
            e.target.appendChild(c);
            console.log("created");
        }
    }
});

$(document).ready(function() {
//-- Setup to check for bingo --//
var winningCells = [
    ['1','2','3','4','5'],
    ['6','7','8','9','10'],
    ['11','12','freeSpace','13','14'],
    ['15','16','17','18','19'],
    ['20','21','22','23','24'],
    ['1','6','11','15','20'],
    ['2','7','12','16','21'],
    ['3','8','freeSpace','17','22'],
    ['4','9','13','18','23'],
    ['5','10','14','19','24'],
    ['1','7','freeSpace','18','24'],
    ['5','9','freeSpace','15','20'],
];

var possibleWinners = winningCells.length;

var selected = ['freeSpace'];

// Toggle clicked and not clicked
$('.cell').click(function(){
    $(this).toggleClass('clicked');
    // Push clicked object ID to 'selected' array
    selected.push($(this).attr('id'));
    // Compare winners array to selected array for matches
    for(var i = 0; i < possibleWinners; i++) {
        var cellExists = 0;
        for(var j = 0; j < 5; j++) {
            if($.inArray(winningCells[i][j], selected) > -1) {
                cellExists++;
                }
            }
            // If all 5 winner cells exist in selected array alert success message
            if(cellExists == 5) {
                // Add what happens when you win here.
                console.log("Bingo!");
                startConfetti();
            }
        }
    });
        // Count the number of squares clicked
        $('.cell').data('clicked', 0)
        .click(function(){
            var counter = $(this).data('clicked');
            $(this).data('clicked', counter ++);
            console.log(counter);
        })

});


