function check(){
	
	// functionality: check every inputed value and if it corresponds with the correct value add 1 to the counter of correct values. 
	// Have an array with results and pick the text values in this array based on the number of correct anwswers. Return this message 
	// and the number of correct anwsered questions.

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
	if (question1 == "Rico Verhoeven") {
		correct++;
}
	if (question2 == "Jiu-Jitsu") {
		correct++;
}	
	if (question3 == "Light heavyweight") {
		correct++;
	}
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;
	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}