// get element by ID into a variable in section
// create a timer
// create questions with multiple choice 


    const question1 = {  
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>",
    choice2: "<ahref>",
    choice3: "<br>",
    choice4: "<link>",
    Answer: "<script"
 };
  
    const question2 =  {
    question2: "what will the console output, console.log(500000 + 1)?",
    choice1: "600000",
    choice2: "500000 + 1",
    choice3: "500001",
    choice4: "5000001",
    Answer: "500001"
 };
 let questionOne = document.querySelector("#question-number-display")
//  let questionTwo = document.querySelector("question-number-display").innerHTML = question2.question2;

questionOne.addEventListener('click', e =>{


}

)

// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("time").innerHTML = d.toLocaleTimeString();
// }


window.addEventListener("click", function(){
    document.getElementById("question-number-display").innerHTML = question1.question;
  });

  console.log(question1.question);