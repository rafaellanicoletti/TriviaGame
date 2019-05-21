
// set variables
// when button start clicked run the timer
// show the time remaining
// answer button correct/incorrect
// submit button 
// stop the timer
// show results 

// Questions&Answers
(function () {
    var questions = [{
        question: "When was the first Grand Prix of Monaco?",
        choices: [A, B, C, D],
        correctAnswer: A
    }, {
        question: "How many Grand Prix races are there in a season?",
        choices: [A, B, C, D],
        correctAnswer: C
    }, {
        question: "Who has won the F1 the most times?",
        choices: [A, B, C, D],
        correctAnswer: B
    }, {
        question: "Who is the best F1 driver of all time?",
        choices: [A, B, C, D],
        correctAnswer: B
    }, {
        question: "Who was the best driver in 2018?",
        choices: [A, B, C, D],
        correctAnswer: A
    }];

// set variables
var choices = 0;
var correctA = 0;
var wrongA = 0;
var buttonStart = 0;


// when button start clicked run the timer
$(document).ready(function(){
    $("#start-button").click(function(){
        // start the timer.
    });
});