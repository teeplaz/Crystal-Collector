var minNum = 13;
var maxNum = 55

var targetNumber = randomNumberFromRange(minNum, maxNum);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}  


var winsTotal = 0;

var lossTotal = 0;

$("#number-to-guess").text(targetNumber);

var crystals = $("#crystals");

var counter = 0;






var numberOptions = [2, 3, 5, 8];

for (var i = 0; i < numberOptions.length; i++) {

var iCrystal = $("<img>");

iCrystal.addClass("crystal-image");

iCrystal.attr("src", "./assets/images/image" + i + ".jpg" );  //"https://mattfiske.files.wordpress.com/2014/02/moldavite.jpg"
 



iCrystal.attr("data-crystalvalue", numberOptions[i]);

crystals.append(iCrystal);
}

crystals.on("click", ".crystal-image", function() {

var crysVal = ($(this).attr("data-crystalvalue"));
crysVal = parseInt(crysVal);

counter += crysVal;

$("#totalScore").text(+ counter);

if (counter === targetNumber) {
    winsTotal++;
    $("#messageWL").text("You Win");
    
    $("#winTotal").text(+ winsTotal);
    
    setTimeout(function(){resetGame()}, 3000);
    
}

else if (counter >= targetNumber) {
    lossTotal++;
    $("#messageWL").text("You Lose");
    
    $("#lossTotalotal").text(+ lossTotal);
    
    setTimeout(function(){resetGame()}, 3000);
   
}

});

function resetGame() {


targetNumber = randomNumberFromRange(minNum, maxNum);

counter = 0;

updateDisplay();
};


function updateDisplay() {

$("#totalScore").text(+ counter);
$("#messageWL").text("");
$("#number-to-guess").text(targetNumber);
}




