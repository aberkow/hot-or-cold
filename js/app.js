var currentGameState = {}; //just to test put it back later

$(document).ready(function(){
	
    var userNumber; //the value the user enters
    
    startGame(); //start the game on load
    
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    $('.new').click(function() { //click the newGame button to load a new random #
        startGame();
    });

    /*---Get the user's number input and add it to the currentGameState object.---*/
    $('#guessButton').click(function(evt) {
        evt.preventDefault(); 
        compareNumbers();
    });
    
    $('#userGuess').change(function(evt) {
        var newNumber = parseInt($(evt.target).val(), 10);
        if (isNaN(newNumber)) {
            alert('Please enter a number');
            $(evt.target).val(currentGameState.userNumber);
        }
        else {
            currentGameState.userNumber = newNumber;
        }
    });
    
    /*---function area---*/
    
    function startGame() { //create a random number btwn 1-100
        currentGameState.secretNumber = Math.floor((Math.random() * 100) + 1);
    }
    
    function compareNumbers() {
        if (currentGameState.secretNumber == currentGameState.userNumber) {
            $('#feedback').text('YOU WIN!!!');           
        }
        else {
            var difference = Math.abs(currentGameState.secretNumber - currentGameState.userNumber);
            if (difference > 50) {
                $('#feedback').text('Very cold!');
            } else if (difference <= 50 && difference > 30) {
                $('#feedback').text('Cold');
            } else if (difference <= 30 && difference > 10) {
                $('#feedback').text('Hot');
            } else {
                $('#feedback').text('Very hot!');
            }
        }
    }
    
});