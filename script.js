// get element by ID into a variable in section
// create a timer
// create questions with multiple choice 
// create a for loop to cycle between questions and chocies




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
  
  var questions = document.getElementById("questions-list");
  var choices = document.getElementById("choices")
  var startButton = document.getElementById("start-btn");
  var welcomeContainer = document.querySelector(".welcome");
  var quiz1 = document.querySelector(".quiz1");
  var quiz2 = document.querySelector(".quiz2");
  var quiz3 = document.querySelector(".quiz3");
  var end = document.querySelector(".end");
  var next1  = document.querySelector("#next1");
  var next2  = document.querySelector("#next2");
  var timer = document.querySelector("#time");
  var toEndScreen = document.querySelector("#to-end")
  var restart = document.querySelector("#restart")
  var seconds =  60;
  var stop =  end.style.display = "block";

  
  
  for (let i = 0; i < question1.length; i++){
    question1[i];
    questions.innerHTML = (question1[i].question);
    choices.innerHTML = (question1[i].choices);
    console.log(question1[i]);
  }


  // current display on first window
quiz1.style.display = "none";
quiz2.style.display = "none";
quiz3.style.display = "none";
end.style.display = "none";

startButton.addEventListener("click", function() {
welcomeContainer.style.display = "none";
quiz1.style.display = "block";
setTimer();
});

next1.addEventListener("click", function() {
welcomeContainer.style.display = "none";
quiz1.style.display = "none";
quiz2.style.display = "block";

});

next2.addEventListener("click", function() {
welcomeContainer.style.display = "none";
quiz1.style.display = "none";
quiz2.style.display = "none";
quiz3.style.display = "block";
});
// place new functions here 

toEndScreen.addEventListener("click", function(){
  quiz1.style.display = "none";
  quiz2.style.display = "none";
  quiz3.style.display = "none";
  end.style.display = "block";

});

restart.addEventListener("click", function(){
end.style.display = "none";
welcomeContainer.style.display = "block";

})
// timer funtion here
function setTimer(){
var time = setInterval(
   function(){
      seconds--;
      console.log(seconds);
      timer.innerHTML = seconds;
      if (seconds == 0|| end  == true ){
         clearInterval(time);
         return endScreen();
        }}
      // seconds = 60;       }
,1000)
}

let endScreen = function endScreen() {
  welcomeContainer.style.display = "none";
  quiz1.style.display = "none";
  quiz2.style.display = "none";
  quiz3.style.display = "none";
  end.style.display = "block";
seconds = 60;
};