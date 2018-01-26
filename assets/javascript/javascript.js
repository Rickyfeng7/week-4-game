$(document).ready(function() {
	var win	= 0;
	var loss = 0; 
	var randomNumber;
	var crystalOne;
	var crystalTwo = 0;
	var crystalThree = 0;
	var crystalFour = 0;
	var totalScore = 0;


	var randomGen = function(){
		randomNumber = Math.floor(Math.random()*(102)) + 19;
		console.log("randomNumber",randomNumber);

	};
	randomGen();

	var userGen	= function(){
		var button = Math.floor(Math.random()*(12)) + 1;
		return button;
		console.log("button",button);
	};

	function initializeStart(){
	randomGen();
	crystalOne = userGen();
	crystalTwo = userGen();
	crystalThree = userGen();
	crystalFour = userGen();
	$("#start").html(randomNumber);
        totalScore = 0;
        $("#scoreBox").html(totalScore);
};

	$("#start").html(randomNumber);
	initializeStart();

	$("#crystalOne").on("click", function() {
		totalScore = parseInt(totalScore) + parseInt(crystalOne);
		$("#scoreBox").html("Total: " + totalScore);
		console.log(totalScore);
		console.log(randomGen);
		compare();
	});
	$("#crystalTwo").on("click", function() {
		totalScore = parseInt(totalScore) + parseInt(crystalTwo);
		$("#scoreBox").html("Total: " + totalScore);
		console.log(totalScore);
		compare();
	});
	$("#crystalThree").on("click", function() {
		totalScore = parseInt(totalScore) + parseInt(crystalThree);
		$("#scoreBox").html("Total: " + totalScore);
		console.log(totalScore);
		compare();
	});
	$("#crystalFour").on("click", function() {
		totalScore = parseInt(totalScore) + parseInt(crystalFour);
		$("#scoreBox").html("Total: " + totalScore);
		console.log(totalScore);
		compare();
	});

	function compare(){
		console.log("inside",win);
		console.log("text",loss);
		if (totalScore === randomNumber){
			win++;
				initializeStart();
				$("#win").text(win);
				alert(win);
		}
		else if (totalScore > randomNumber){
			loss++;
				initializeStart();
				$("#loss").text(loss);
				alert(loss);
		};
	};
});
