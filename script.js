// get element by ID into a variable in section
// create a timer
// create questions with multiple choice 





let question1 = [ {
     question: "Inside which HTML element do we put the JavaScript? ",
     choices: ["script", "link", "ahref", "br"],
     correct: "script",
   },
   {
     question: "Which of the following keywords is used to define a variable in Javascript?",
     choices: ["var", "let", "both", "none of the above"],
     correct: "both",
   },
   {
     question: "How can a datatype be declared to be a constant type?",
     choices: ["const","var","let","constant",],
     correct: "cont",
   },
  ];

  
var startButton = document.getElementById("start-btn");
var welcomeContainer = document.querySelector(".welcome");
var quiz = document.querySelector(".quiz");
var end = document.querySelector(".end");
var timer = document.querySelector("#time");
var toEndScreen = document.querySelector("#to-end")
var seconds =  10;
// qChoices = [questionInside,questionHow,questionWhich];

// current display on first window
quiz.style.display = "none";
end.style.display = "none";

startButton.addEventListener("click", function() {
welcomeContainer.style.display = "none";
quiz.style.display = "block";
setTimer();
});
// place new function here 

toEndScreen.addEventListener("click", function(){
  quiz.style.display = "none";
  end.style.display = "block";



});


function setTimer(){
var time = setInterval(
   function(){
      seconds--;
      console.log(seconds);
      timer.innerHTML = seconds;
      if (seconds == 0){
         clearInterval(time);
      }
   }
,1000)

}



