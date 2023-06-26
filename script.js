// get element by ID into a variable in section
// create a timer
// create questions with multiple choice 


    const question1 = {  
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "A<script>",
    choice2: "B<ahref>",
    choice3: "C<br>",
    choice4: "D<link>",
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
//  let questionOne = document.querySelector("#question-number-display").innerHTML = ("BACON")


// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("time").innerHTML = d.toLocaleTimeString();
// }


window.addEventListener("click", function(){
    document.getElementById("question-number-display").innerHTML = question1.question;
    document.querySelector("#q1").innerHTML = ("<button>A: script tag</button>");
    document.getElementById("q2").innerHTML = ("<button>B: ahref tag</button>");
    document.getElementById("q3").innerHTML = ("<button>C: br</button>");
    document.getElementById("q4").innerHTML =(" <button>D: link</button>");

  });

