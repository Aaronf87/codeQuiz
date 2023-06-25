// get element by ID into a variable in section
// create a timer
// create questions with multiple choice 
let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>",
    choice2: "<ahref>",
    choice3: "<br>",
    choice4: "<link>",
    Answer: "<script",
 },
  {
    question: "what will the console output, console.log(500000 + 1)?",
    choice1: "600000",
    choice2: "500000 + 1",
    choice3: "500001",
    choice4: "5000001",
    Answer: "500001",
 },
  {
    question: "JavaScript adds ?",
    choice1: "<script>",
    choice2: "<ahref>",
    choice3: "<br>",
    choice4: "<link>",
    Answer: "<script",
 },

]




setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}


window.addEventListener("click", function(){
    document.getElementById("question-number-display").innerHTML = "Inside which HTML element do we put the JavaScript?";
  });