"use strict";

/*
Checklist:
change score *
change question number *
send user to start menu
  reset score and question numbers to 0 *
visually appealing start menu
start the quiz
check answer
change question
check final score
*/

// current question numbers and score
let questionNumber = 0;
let score = 0;

// figure out html and css for the quiz

// create function for button to start and change screens per question and answer
function handleStart() {

}

function handleNext() {

}

function handleCheck() {

}

//send use to start menu
function handleRestart() {
  //change question number back to 0
  questionNumber = 0;
  $('.qNumber').text(questionNumber);
  //change score back to 0
  score = 0;
  $('.score').text(score);
  // test logs
  //console.log("question " + questionNumber);
  //console.log("score " + score);
}

// create function for changing question number
function changeQuestionNumber() {
  // add 1 to question number
  questionNumber ++;
  //change the html question number text
  $('.qNumber').text(questionNumber);
  //test log
  //console.log(questionNumber);

}

// create function for adding to score
function changeScore() {
  // add 1 to score
  score ++;
  //change the html score number text
  $('.score').text(score);
  //test log
  //console.log(score);
}

// funtion to handle all the buttons
function init() {
  handleStart();
  handleCheck();
  handleNext();
  handleRestart();
}

init();