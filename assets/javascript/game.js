var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src="C:/Users/chris/Word-Guess-Game/assets/images/uno.jpg";
    img.width = 276;
    img.height = 300;
	img.alt = alt;
	
	document.body.appendChild(img);
}

document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		if(userGuess == computerGuess) {
			alert("Impossible!! You are a legend! Can you do it again?");
		restart();
	}}

	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		alert("Mwahahahaha I knew you didn't have it in you. Off to the shadow realm with you!")
		show_image('C:/Users/chris/Word-Guess-Game/assets/images/uno.jpg');
		restart();
	}
}
