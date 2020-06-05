$(document).ready(function() {

    // Array to hold random numbers to populate the bingo cells
var randNums = [];

// Grabbing 25 unique numbers and stores them into the randNums array
while(randNums.length < 25) {
    var r = Math.floor((Math.random() * 99) + 1); 
    if( r === 13) continue;

    if(randNums.indexOf(r) === -1) randNums.push(r);
}

console.log(randNums);

// Takes the numbers from the array and populates the bingo cells by the id
$(".cell").each(function(i, td) {
    $(this).text(randNums[i]);
    console.log(td);
});
});