// get element by ID into a variable in section
// create a timer
// create questions with multiple choice

var startingScreenEl = document.getElementById("starting-screen");
var questionContainerEl = document.getElementById("question-container");
var questionChoicesEl = document.getElementById("question-choices");
var endingScreenEl = document.getElementById("ending-screen");
var timerEl = document.getElementById("timer");

var questionIndex = 0;
var time = 100;

timerEl.textContent = time;

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript? ",
    choices: ["script", "link", "ahref", "br"],
    correct: "script",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    choices: ["var", "let", "both", "none of the above"],
    correct: "both",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    choices: ["const", "var", "let", "constant"],
    correct: "const",
  },
];

function hideStartingScreen() {
  startingScreenEl.setAttribute("class", "hide");

  // start the timer
  var timerInterval = setInterval(function () {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);

  renderQuestions();
}

function renderQuestions() {
  questionContainerEl.removeAttribute("class");
  // getting the current question from the questions array
  var currentQuestion = questions[questionIndex];
  // update the title with the current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.question;
  // clear out any old question choices
  questionChoicesEl.innerHTML = "";

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceList = document.createElement("button");

    choiceList.setAttribute("class", "btn btn-secondary btn-lg btn-block question-choices");
    choiceList.setAttribute("value", choice);

    choiceList.textContent = i + 1 + ". " + choice;

    questionChoicesEl.append(choiceList);
  }
}

function nextQuestion(event) {
  var buttonEl = event.target;
  console.log(buttonEl.value)

  if (!buttonEl.matches(".question-choices")) {
    return;
  }

  // check if user guessed wrong
  if (buttonEl.value !== questions[questionIndex].correct) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timerEl.textContent = time;
    // display "wrong"
  } else {
    // display "correct"
  }
  // flash right or wrong on page for a second

  // move on to the next question
  questionIndex++;

  // check if we've run out of questions
  // if else statement
  if (time <= 0 || questionIndex === questions.length) {
    // end the quiz
    endQuiz();
  } else {
    // get the next question
    renderQuestions();
  }
}

function endQuiz() {
  questionContainerEl.setAttribute("class", "hide");
  endingScreenEl.removeAttribute("class");
  // stop timer
  time = 0;
  clearInterval(time);
  // show end screen
  // show final score
  // hide questions section

}

startingScreenEl.addEventListener("click", hideStartingScreen);

var buttonElement = document.getElementById("button");
var buttonElement2 = document.getElementById("button2");
var buttonElement3 = document.getElementById("button3");
var questionPelement = document.getElementById("question-number-display");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
qChoices = [questionInside, questionHow, questionWhich];


function questionInside() {
  // syntax used to acess the array object index 0
  questionPelement.textContent = question1[0].question;
  c1.innerHTML = question1[0].choices[0];
  c2.innerHTML = question1[0].choices[1];
  c3.innerHTML = question1[0].choices[2];
  c4.innerHTML = question1[0].choices[3];
}
function questionWhich() {
  // syntax used to acess the array object index 1
  questionPelement.innerHTML = question1[1].question;
  c1.innerHTML = question1[1].choices[0];
  c2.innerHTML = question1[1].choices[1];
  c3.innerHTML = question1[1].choices[2];
  c4.innerHTML = question1[1].choices[3];
}
function questionHow() {
  // syntax used to acess the array object index 2
  questionPelement.innerHTML = question1[2].question;
  c1.innerHTML = question1[2].choices[0];
  c2.innerHTML = question1[2].choices[1];
  c3.innerHTML = question1[2].choices[2];
  c4.innerHTML = question1[2].choices[3];
}

function start() {
  if (true) {
    function qArray() {
      for (let i in qChoices) {
        return qChoices[i];
      }
    }
  }
  qArray();
}

buttonElement.addEventListener("click", questionInside);
buttonElement2.addEventListener("click", questionWhich);
buttonElement3.addEventListener("click", questionHow);
questionChoicesEl.addEventListener("click", nextQuestion);