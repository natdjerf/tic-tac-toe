'use strict';
let moveCounter = 0;
let players = ['x', 'o'];
let player;


// To identify player as 'x' or 'o' :
$('.board').on('click', function () {
	moveCounter++;
  if (moveCounter % 2 === 0) {
  	player = players[0];
  }
  else {
  	player = players[1];
  }
  console.log('move counter = ' + moveCounter);

});

// To populate the board with move :
$('.board > div > div').on("click", function(event) {
	if (moveCounter % 2 === 0) {
		player = players[0];
	}
	else {
		player = players[1];
	}



	let move = $(event.target).data('index');
  if ( $ (this).text() !== '') {
    $ (this).text(player);
  }
  else {
    console.log('not available');
  }
  console.log(move + 'was played by player ' + player);
});







// to push $(this) into the game piece array based off it's location do i:
// assign an html id to the empty array and replace it with the value of $(this)?
// if I set variable = $(this) (which will be .middle-left)
// ie, set (variable) to player in array? AM I OVER THINKING THIS?

// For a random first plater: int counter = Math.random()*2;
// or let turn = true; and alternate?






// on check - if no val(), text('x or o');
// $('.top-center').text();

// $('#sign-in').find("[name='credentials[email]']")
//$('#sign-up').find("[name='credentials[email]']").val();
