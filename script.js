// get element by ID into a variable in section
// create a timer
// create questions with multiple choice 
// 
// var nextQuestion = document.querySelector(question-number-display)
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}


window.addEventListener("click", function(){
    document.getElementById("question-number-display").innerHTML = "Inside which HTML element do we put the JavaScript?";
  });