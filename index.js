"use strict";

/*
Checklist:
change score
change question number


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

function handleRestart() {

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