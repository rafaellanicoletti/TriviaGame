
// Questions&Answers "object"
    var questions = [
        {
        question: "When was the first Grand Prix of Monaco?",
        choices: ["1929", "1920","1952","1945"],
        correctAnswer: "1929"
    }, {
        question: "How many Grand Prix races are there in a season?",
        choices: ["20", "19", "21", "23"],
        correctAnswer: "21"
    }, {
        question: "Who has won the F1 the most times?",
        choices: ["Niki Lauda", "Michael Schumacher", "Lewis Hamilton", "AyrtonSenna"],
        correctAnswer: "Michael Schumacher"
    }, {
        question: "Who is the best F1 driver of all time?",
        choices: ["Niki Lauda", "Ayrton Senna", "Lewis Hamilton", "Ayrton Senna"],
        correctAnswer: "Ayrton Senna"
    }, {
        question: "Who was the best driver in 2018?",
        choices: ["Lewis Hamilton", "Daniel Ricciardo", "Max Verstappen", "Charles Leclerc"],
        correctAnswer: "Lewis Hamilton"
    }
];

// set variables
score = 0;
btns = $("<button type='button' class='btn btn-outline-*'>")


//Show questions
function addQuestions(){
    //iterate through the questions array to build our questions.
   
    
    for (var i=0; i<questions.length; i++){
        var div = $("<div class='container1'>")
        var p = $("<p>")
        p.text(questions[i].question)
        div.append(p)

        for(var j = 0;j<questions[i].choices.length; j++){
            var btns = $("<button type='button' class='btn btn-outline-*'>")
            btns.text(questions[i].choices[j])
            div.append(btns)
        }

        $("#question-wrapper").append(div)
    }

}

$("<button type='button' class='btn btn-outline-*'>").click(correctAnswers)



// // when button start clicked run the timer
$("#start-button").click(startRound)

function startRound(){
    var timer = 30
    var interval = setInterval(function(){
        timer-=1
        // show the time remaining
        $("#display").text("00:"+timer)
    },1000)
}

addQuestions()


function correctAnswers(questions){
	for(var z=0; z<questions.length; z++){
		// find selected answer
        userAnswer = (questions[z].choices);
		// if answer is correct
		if(userAnswer===questions[z].correctAnswer){
			// add to the number of correct answers
			score++;
		}
    }
}

// on submit, show results
$("#btn btn-dark").click(submit)
function submit(){
    alert("Your score is: " + score + "out of 5!");
}









// answer button correct/incorrect
// function isCorrect() {
//     // if button (whatever question).correct answer
//     if ("btns")click(questions[0].correctAnswer);
//     // score goes up. 
//     score++;
// }

