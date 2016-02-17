
$(document).ready(function(){
	var currentGameState = {};
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
        //debugger;
        startGame();
    });

    function startGame() { //create a random number btwn 1-100
        currentGameState.secretNumber = Math.floor((Math.random() * 100) + 1);
    }
    
    /*---Get the user's number input and add it to the currentGameState object.---*/
    $('#guessButton').click(function(evt) {
        evt.preventDefault();
        var numberAsString = $('#userGuess').val();
        currentGameState.userNumber = Number(numberAsString);
        console.log(currentGameState);
        debugger;
    });
    


});