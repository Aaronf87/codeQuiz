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

  
var buttonElement = document.getElementById("button");
var questionPelement = document.getElementById("question-number-display");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");



buttonElement.addEventListener("click", function(){
   // syntax used to acess the array object index 0
   questionPelement.innerHTML = question1[0].question;
                 c1.innerHTML = question1[0].choices[0];
                 c2.innerHTML = question1[0].choices[1];
                 c3.innerHTML = question1[0].choices[2];
                 c4.innerHTML = question1[0].choices[3];
  
    console.log(question1[0].question);
    console.log(question1[0].choices);

  });

