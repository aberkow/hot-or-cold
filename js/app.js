
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
    
    $('#guessButton').click(function(evt) {
        evt.preventDefault();
        var numberAsString = $('#userGuess').val();
        userNumber = Number(numberAsString);
        console.log(userNumber);
        debugger;
    });

});



//    $('.button').submit(function(evt) {
//        evt.preventDefault();
//        debugger;
//        $('#userGuess').change(function() {
//            debugger;
//            var numberAsString = $('#userGuess').val();
//            userNumber = parseInt(numberAsString, 10);
//            console.log(numberAsString);
//            currentGameState.userNumber = userNumber;
//        });
//    });

//    function userGuess() {  
//        $('#userGuess').change(function() { //add event listener for preventDefault.
//            //evt.preventDefault();
//            var numberAsString = $('#userGuess').val(); //get the value of the userGuess box and make sure it's an int
//            userNumber = parseInt(numberAsString, 10);
//            
//            
//            currentGameState.userNumber = userNumber; //assign the guess to the currentGameState
//        });


