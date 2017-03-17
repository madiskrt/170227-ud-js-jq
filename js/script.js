function submitAnswers(){
	var total = 3;
	var score = 0;

	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;

	//validation
	
	for(var i = 1; i <= total; i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
		alert("You missed question " + i);
		return false;
		}

	}

	//will stop from submitting it to whatever
	//return false;

	//set correct answers
	var answers = ["a", "b", "d"];

	//check answers
	/*if(q1 == answers[0]){
		score++;
	}
	if(q2 == answers[1]){
		score++;
	}
	if(q3 == answers[2]){
		score++;
	}*/

	for(i = 1; i <= total; i++){
		if(eval('q'+i) == answers[i -1]){
			score++;
		}
	}

	alert("Your score:  " + score);

}