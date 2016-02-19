var currentGameState = {}; //just to test put it back later

$(document).ready(function(){
	
    var userNumber; //the value the user enters
    var userWinState;
    
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
        $('#count').text(counter());
        $('.guessBox').append('<li>' + currentGameState.userNumber + '</li>');
        
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
    
    function startGame() { //create a random number btwn 1-100, clear the entry box, set #userGuess to 0
        currentGameState.secretNumber = Math.floor((Math.random() * 100) + 1);
        currentGameState.userNumber = $('#userGuess').val('');
        currentGameState.guessNumber = 0;
    }
    
    function counter() {
            currentGameState.guessNumber += 1;
            var count = currentGameState.guessNumber.toString();
            return count;
        }
    
    function compareNumbers() {
        if (currentGameState.secretNumber == currentGameState.userNumber) {
            $('#feedback').text('YOU WIN!!!'); 
            userWinState = true;
        }
        else {
            var difference = Math.abs(currentGameState.secretNumber - currentGameState.userNumber);
            if (difference > 50) {
                $('#feedback').text('Very cold!');
                userWinState = false;
            } else if (difference <= 50 && difference > 30) {
                $('#feedback').text('Cold');
                userWinState = false;
            } else if (difference <= 30 && difference > 10) {
                $('#feedback').text('Hot');
                userWinState = false;
            } else {
                $('#feedback').text('Very hot!');
                userWinState = false;
            }
        }
    }
    
});

/*
still needs counter and difference btwn current & previous guess
*/