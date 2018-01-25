$(document).ready(function() {
var win	= "win =" + 0;
var loss = 0; 
var randomNumber = "";
var crystalOne;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var totalScore = 0;


	var randomGen = function(){
	 randomNumber = [Math.floor(Math.random()*(102)) + 19];
	console.log(randomNumber);
};
randomGen();

var userGen	= function(){
	button = [Math.floor(Math.random()*(12)) + 1];
	return button;
	console.log(button);
};

userGen();

function initializeStart(){

	 randomNumber = randomGen();
	 crystalOne = userGen();
	 crystalTwo = userGen();
	 crystalThree = userGen();
	 crystalFour = userGen();
	
};

	$("#start").html(randomNumber);
initializeStart();

	$("#crystalOne").on("click", function() {
		totalScore = parseInt(totalScore) + parseInt(crystalOne);
		$("#scoreBox").html("Total: " + totalScore);
		console.log(totalScore);
	});
	$("#crystalTwo").on("click", function() {
		totalScore = parseInt(totalScore) + parseInt(crystalTwo);
		$("#scoreBox").html("Total: " + totalScore);
		console.log(totalScore);
	});
	$("#crystalThree").on("click", function() {
		totalScore = parseInt(totalScore) + parseInt(crystalThree);
		$("#scoreBox").html("Total: " + totalScore);
		console.log(totalScore);
	});
	$("#crystalFour").on("click", function() {
		totalScore = parseInt(totalScore) + parseInt(crystalFour);
		$("#scoreBox").html("Total: " + totalScore);
		console.log(totalScore);
	});

	if (totalScore === randomNumber){
		win++;
			initializeStart();
			$("#win").html(win);
			console.log(win);
	};

	if (totalScore > randomNumber){
		loss++;
			initializeStart();
			$("#loss").html(loss);
			console.log(loss);
	};
});
