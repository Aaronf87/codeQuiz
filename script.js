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
var buttonElement2 = document.getElementById("button2");
var buttonElement3 = document.getElementById("button3");
var questionPelement = document.getElementById("question-number-display");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
qChoices = [questionInside,questionHow,questionWhich];

// let qInside = function questionInside() {
//  // syntax used to acess the array object index 0
//  questionPelement.innerHTML = question1[0].question;
//  c1.innerHTML = question1[0].choices[0];
//  c2.innerHTML = question1[0].choices[1];
//  c3.innerHTML = question1[0].choices[2];
//  c4.innerHTML = question1[0].choices[3];
// };
// let qWhich = function questionWhich() {
//  // syntax used to acess the array object index 1
//  questionPelement.innerHTML = question1[1].question;
//  c1.innerHTML = question1[1].choices[0];
//  c2.innerHTML = question1[1].choices[1];
//  c3.innerHTML = question1[1].choices[2];
//  c4.innerHTML = question1[1].choices[3];
// };
// let qHow = function questionHow() {
//  // syntax used to acess the array object index 2
//  questionPelement.innerHTML = question1[2].question;
//  c1.innerHTML = question1[2].choices[0];
//  c2.innerHTML = question1[2].choices[1];
//  c3.innerHTML = question1[2].choices[2];
//  c4.innerHTML = question1[2].choices[3];
// };
function questionInside() {
   // syntax used to acess the array object index 0
   questionPelement.textContent = question1[0].question;
   c1.innerHTML = question1[0].choices[0];
   c2.innerHTML = question1[0].choices[1];
   c3.innerHTML = question1[0].choices[2];
   c4.innerHTML = question1[0].choices[3];
  };
function questionWhich() {
   // syntax used to acess the array object index 1
   questionPelement.innerHTML = question1[1].question;
   c1.innerHTML = question1[1].choices[0];
   c2.innerHTML = question1[1].choices[1];
   c3.innerHTML = question1[1].choices[2];
   c4.innerHTML = question1[1].choices[3];
   buttonElement2.innerText = ("Next question")
  };
 function questionHow() {
   // syntax used to acess the array object index 2
   questionPelement.innerHTML = question1[2].question;
   c1.innerHTML = question1[2].choices[0];
   c2.innerHTML = question1[2].choices[1];
   c3.innerHTML = question1[2].choices[2];
   c4.innerHTML = question1[2].choices[3];
   buttonElement3.innerText = ("Next question")

  };

  function start(){
   if (true) {
   
function qArray(){
   for(let i in qChoices){
      return qChoices[i];

   }}
}
   qArray();
}

buttonElement.addEventListener("click", questionInside);
buttonElement2.addEventListener("click", questionWhich);
buttonElement3.addEventListener("click", questionHow);

