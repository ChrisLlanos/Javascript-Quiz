//selects element for button to start quiz
var startQuiz = document.querySelector("#startQuiz");
//selects entire element where quiz takes place
var questionBox = document.querySelector(".questionBox");
//selects timer element in top right
var timer = document.querySelector(".timer");

//initialized global variables
//will be incremented for every correct question
var score = 0;
//initial amount of time for quiz once started
var secondsLeft = 45;

//will be called by a correct answer and increments score
function checkAnswer(target){
    score++
    questionBox.textContent = "Correct!";

    return;
}

//will be called by incorrect choice and decrements timer as penalty
function incorrect(target){
    alert("Incorrect");
    //add timer penalty for incorrect answer
    secondsLeft=secondsLeft-2;
    
    return
}

//gives final score and set timer high to avoid countdown message
function finalizeQuiz(event){
    questionBox.textContent = "Congrats on answering all the questions! Your score is: " + score;
    secondsLeft = 999;
}

//loads question5 by creating buttons (event listeners corresponding below)
function Question5(event){
    questionBox.textContent = "what is commonly used in a loop to traverse it?";

    var opA = document.createElement("button");
    opA.textContent = "interval";
    document.querySelector(".questionBox").appendChild(opA);
    //incorrect choice will call incorrect()
    opA.addEventListener("click",function(){incorrect(event)});

    var opB = document.createElement("button");
    opB.textContent = "index";
    document.querySelector(".questionBox").appendChild(opB);
    //correct choice will trigger timeout to next question and call checkAnswer
    opB.addEventListener("click",function(){
        checkAnswer(event.target);

        setTimeout(() => { finalizeQuiz(event); }, 2000);

    });

    var opC = document.createElement("button");
    opC.textContent = "marker";
    document.querySelector(".questionBox").appendChild(opC);

    opC.addEventListener("click",function(){incorrect(event)});


    return;
}

//loads question4 by creating buttons (event listeners corresponding below)
function Question4(event){
    questionBox.textContent = "what is the key term to create a variable?";

    var opA = document.createElement("button");
    opA.textContent = "var";
    document.querySelector(".questionBox").appendChild(opA);
    //correct choice will trigger timeout to next question and call checkAnswer
    opA.addEventListener("click",function(){
        checkAnswer(event.target);

        setTimeout(() => { Question5(event); }, 2000);

    });

    var opB = document.createElement("button");
    opB.textContent = "set";
    document.querySelector(".questionBox").appendChild(opB);
    //incorrect choice will call incorrect()
    opB.addEventListener("click",function(){incorrect(event)});

    var opC = document.createElement("button");
    opC.textContent = "term";
    document.querySelector(".questionBox").appendChild(opC);

    opC.addEventListener("click",function(){incorrect(event)});


    return;
}

//loads question3 by creating buttons (event listeners corresponding below)
function Question3(event){
    questionBox.textContent = "In order to see an element created in js on the page...the element must be?";

    var opA = document.createElement("button");
    opA.textContent = "appended";
    document.querySelector(".questionBox").appendChild(opA);
    //correct choice will trigger timeout to next question and call checkAnswer
    opA.addEventListener("click",function(){
        checkAnswer(event.target);

        setTimeout(() => { Question4(event); }, 2000);

    });

    var opB = document.createElement("button");
    opB.textContent = "seen";
    document.querySelector(".questionBox").appendChild(opB);
    //incorrect choice will call incorrect()
    opB.addEventListener("click",function(){incorrect(event)});

    var opC = document.createElement("button");
    opC.textContent = "joined";
    document.querySelector(".questionBox").appendChild(opC);

    opC.addEventListener("click",function(){incorrect(event)});


    return;
}

//loads question2 by creating buttons (event listeners corresponding below)
function Question2(event){
    questionBox.textContent = "How can you delay a function from executing in javascript?";

    var opA = document.createElement("button");
    opA.textContent = "with wait()";
    document.querySelector(".questionBox").appendChild(opA);

    opA.addEventListener("click",function(){incorrect(event)});

    var opB = document.createElement("button");
    opB.textContent = "with setTimeout()";
    document.querySelector(".questionBox").appendChild(opB);

    opB.addEventListener("click",function(){
        checkAnswer(event.target);

        setTimeout(() => { Question3(event); }, 2000);

    });

    var opC = document.createElement("button");
    opC.textContent = "with delay()";
    document.querySelector(".questionBox").appendChild(opC);

    opC.addEventListener("click",function(){incorrect(event)});

    return;
}

//loads question1 by creating buttons (event listeners corresponding below)
function Question1(event){
    questionBox.textContent = "What javascript term can hold key-value pairs?";

    var opA = document.createElement("button");
    opA.textContent = "Loop";
    document.querySelector(".questionBox").appendChild(opA);
    
    opA.addEventListener("click",function(){incorrect(event)});

    var opB = document.createElement("button");
    opB.textContent = "Void";
    document.querySelector(".questionBox").appendChild(opB);
    
    opB.addEventListener("click",function(){incorrect(event)});

    var opC = document.createElement("button");
    opC.textContent = "Object";
    document.querySelector(".questionBox").appendChild(opC);
    
    opC.addEventListener("click",function(){
        checkAnswer(event.target);

        setTimeout(() => { Question2(event); }, 2000);

    });

    return;
}

//listens for "start click" to begin quiz and calls Question1()
startQuiz.addEventListener("click",function(event){
    questionBox.textContent = "";
    //throws to question1 to start the quiz
    Question1(event);
    //begins the timer and when it reaches 0 will give score and say time is up
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "time: " + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to stop quiz and give sccore
          questionBox.textContent = "Time is Up! Your score is: " + score;
        }
    
      }, 1000);
    
});