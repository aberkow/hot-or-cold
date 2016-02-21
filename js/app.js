var currentGameState = {};

$(document).ready(function(){
	
    var userNumber; //the value the user enters
    
    startGame(); //start the game on load
    
	/*--event listener area--*/
    
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
        evt.preventDefault(); //stop the form from sending
        warmerOrColder(); //compare the numbers
        $('#count').text(counter()); //change the counter
        $('.guessBox').append('<li>' + currentGameState.userNumber + '</li>');
        //create a list of guessed numbers
        currentGameState.guessArray.push(currentGameState.userNumber);
        $('#userGuess').val('').focus();
    });
    
    $('#userGuess').change(function(evt) {
        var newNumber = parseInt($(evt.target).val(), 10); //change the userGuess # from string to Int
        if (isNaN(newNumber) || (newNumber < 1 || newNumber > 100)) {
            alert('Please enter a number between 1 and 100');
            $(evt.target).val(''); //alert/clear if the input is not an int btwn 1 - 100
        } else if (currentGameState.guessCount >= 2 && (currentGameState.userNumber == currentGameState.previousNumber)) {
            alert('Please enter a new number');
            $(evt.target).val('');//alert/clear if two guesses are the same
        } else {
            currentGameState.previousNumber = currentGameState.userNumber; //set the previous number
            currentGameState.userNumber = newNumber; //assign the value of newNumber
        }
    });
    
    /*---function area---*/
    
    function startGame() { //create a random number btwn 1-100, clear the entry box, set #userGuess to 0
        currentGameState.secretNumber = Math.floor((Math.random() * 100) + 1);
        currentGameState.userNumber = null;//
        currentGameState.guessCount = 0;
        currentGameState.previousNumber = null;
        currentGameState.guessArray = [];
        $('#userGuess').val('');
    }
    
    function counter() { //change the guess counter
            currentGameState.guessCount += 1;
            var count = currentGameState.guessCount.toString();
            return count;
        }
    
    function warmerOrColder() {
        if (isNaN(currentGameState.userNumber) || (currentGameState.userNumber < 1 || currentGameState.userNumber > 100)) {
            return alert('Please enter a number between 1 and 100.');
        }
        
        if (currentGameState.secretNumber == currentGameState.userNumber) {
           $('#feedback').text('YOU WIN!!!'); 
         }
        else {
           var currentDifference = Math.abs(currentGameState.secretNumber - currentGameState.userNumber);
           var previousDifference = Math.abs(currentGameState.userNumber - currentGameState.guessArray[currentGameState.guessArray.length - 1]);      
            
            if(currentDifference == previousDifference) {
                alert('Please enter a different number.');
            } else if (currentDifference > 50) {
                $('#feedback').text('Very cold!');
            } else if ( currentDifference <= 50 && currentDifference > 30) {
                $('#feedback').text('Cold');
            } else if (currentDifference <= 30 && currentDifference > 10) {
                $('#feedback').text('Hot');
            } else {
                $('#feedback').text('Very hot!');
            }
            
        }
    }
    
});