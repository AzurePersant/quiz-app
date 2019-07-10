"use strict";

/*$("form").submit(function(e){
  e.preventDefault();
  alert('it is working!');
});*/

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
function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} else {
    renderResults();
  }
}

function renderQuestion() {
  $('.questionAnswersForm').html(generateQuestion());
}

function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  changeScore();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswersForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  // let iconImage = `${STORE[questionNumber].icon}`;
  $('.questionAnswersForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}




// create function for button to start and change screens per question and answer
function handleStart() {
  $('.quizStart').on('click', '.js-start-button', function(event) {
    $('.quizStart').css('display', 'none');
    changeQuestionNumber();
    $('questionAnswersForm').css('display', 'block');
    renderQuestion();
  });
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