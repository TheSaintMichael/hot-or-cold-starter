
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $(".new").click(function(){
      newGame();
    })

    //Global variables for new game.
    var randomNumber, counter;

    function newGame(){
      //Generate a random number from 0 - 100.
      randomNumber = Math.floor(Math.random() * 100) + 1;
      // We'll begin at 0..
      counter = 0;
      $("#feedback").text("Make your guess!");
      $("#userGuess").val("");
      //empty the list items
      $("#guessList").empty();
      $("#count").text(0);
    }
  
  //event listener, when the user click the button, or hits return
  // it will generate a submit event, when received, this will run!
  $("#guess-form").submit(function(e){
    e.preventDefault();
    //get input value from id user-guess
    var userGuess = $("#userGuess").val();
    //compute the difference
    var diff = Math.abs(randomNumber - userGuess);
    counter++;
    //returns the result
    $("#feedback").text(checkGuess(diff));
    $("#count").text(counter);
    $("#guessList").append('<li>' + userGuess + '</li>');
   })


  //'Hot' or 'Cold' is based on a less than and greater than system.
  function checkGuess(diff) {
      if (diff > 80) {
        return "Ice Cold";
      }
      // User will receive 'Hot' when the answer is greater.
      if (diff > 60 ) {
        return "Cold";
      }
       if (diff > 40 ) {
        return "Eh kinda cold";
      }
       if (diff > 20 ) {
        return "Oh man it's getting there";
      }
       if (diff > 10 ) {
        return "Uhhh, you're close";
      }
       if (diff > 5 ) {
        return "You're on fire!";
      }
       if (diff > 2 ) {
        return "Burning Burning Call 911!";
      }
       if (diff > 0 ) {
        return "You finally found me!";
      }
    }
    newGame();
});