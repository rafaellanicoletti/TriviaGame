
// Create variables

var count = 0; 
// 10s
var questionTime = 10; 
var timer;
var score = 0;

// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// let count = 0;
// const questionTime = 10; // 10s
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
// let TIMER;
// let score = 0;



// start function 
var start = function();


// create questions

var questions = [
  {
    question : "When was the first Grand Prix of Monaco? (1929)",
    choiceA : "Correct", 
    choiceB : "Wrong",
    choiceC : "Wrong",
    choiceD : "Wrong",
    correct : "A"

  }, {

    question : "How many Grand Prix races are there in a season? (21)",
    choiceA : "Wrong",
    choiceB : "Wrong",
    choiceC : "Correct",
    choiceD : "Wrong",
    correct : "C"

  }, {

    question: "Who has won the F1 the most times? (Michael Schumacher)",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "B"

  },{
    question: "Who is the best F1 driver of all time? (Ayrton Senna)",
    choiceA: "Correct",
    choiceB: "Wrong",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "A"
  }, { 
    question: "Who was the best driver in 2018? (Lewis HAmilton)",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Wrong",
    choiceD: "Correct",
    correct: "D"
    }
];




// create choices
// create timer 
// create submit button
// create page with results. 