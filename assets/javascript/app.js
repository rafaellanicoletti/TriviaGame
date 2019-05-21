
// // Create variables

// var count = 0; 
// // 10s
// var questionTime = 10; 
// var timer;
// var score = 0;
// var runningQuestion = 0;
// var start = $("#start-button");


// // const lastQuestion = questions.length - 1;
// // let runningQuestion = 0;
// // let count = 0;
// // const questionTime = 10; // 10s
// // const gaugeWidth = 150; // 150px
// // const gaugeUnit = gaugeWidth / questionTime;
// // let TIMER;
// // let score = 0;



// // start function 
// // var start = function();


// // create questions


// var questions = [
//   {
//     question : "When was the first Grand Prix of Monaco? (1929)",
//     choiceA : "1929", 
//     choiceB : "1982",
//     choiceC : "1910",
//     choiceD : "1911",
//     correct: "choiceA"


//   }, {

//     question : "How many Grand Prix races are there in a season? (21)",
//     choiceA : "Wrong",
//     choiceB : "Wrong",
//     choiceC : "Correct",
//     choiceD : "Wrong",
//     correct : "choiceC"

//   }, {

//     question: "Who has won the F1 the most times? (Michael Schumacher)",
//     choiceA: "Wrong",
//     choiceB: "Correct",
//     choiceC: "Wrong",
//     choiceD: "Wrong",
//     correct: "choiceB"

//   },{
//     question: "Who is the best F1 driver of all time? (Ayrton Senna)",
//     choiceA: "Correct",
//     choiceB: "Wrong",
//     choiceC: "Wrong",
//     choiceD: "Wrong",
//     correct: "choiceA"
//   }, { 
//     question: "Who was the best driver in 2018? (Lewis HAmilton)",
//     choiceA: "Wrong",
//     choiceB: "Wrong",
//     choiceC: "Wrong",
//     choiceD: "Correct",
//     correct: "choiceD"
//     }
// ];

// // Show question
// function showQuestion(){
//     var q = questions[runningQuestion];

//     question.innerHtml = "<p>" + q.question + "</p>";
//     choiceA.innerHtml = q.correct;
//     choiceB.innerHtml = q.c;
//     choiceC.innerHtml = q.choiceC;
//     choiceD.innerHtml = q.choiceD;
// }

// start.on("click", start);

// // start quiz
// function start() {
//     start.style.display = "none";
//     renderQuestion();
//     quiz.style.display = "block";
//     // renderProgress();
//     // renderCounter();
//     TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
// }





// // checkAnswer

// function checkAnswer(answer) {
//     if (answer === q.correct) {
//         // answer is correct
//         score++;
//     } 

//     count = 0;
//     if (runningQuestion < lastQuestion) {
//         runningQuestion++;
//         showQuestion();
//     } else {
//         // end the quiz 
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }


// set variables
var choices = 0;
var correctA = 0;
var wrongA = 0;
var buttonStart = 0;

// when button start clicked run the timer



$(document).ready(function () {
    $("#start-button").click(function () {
        // start the timer.
    });
});