//setting questions for the quiz
const questions = {
    questionTitle:["A very useful tool used during development and debugging for printing content to the debugger is:", "String Values must be enclosed within___when being assigned to variables:", "Arrays in JavaScript can be used to store:", "The condition in an if/e;se statement us enclosed with:", "Commonly Sued data types DO NOT include:."],
    options:[["Javascript", "Terminal/Bash", "for loops","console.log"], ["commas", "curly brackets", "quotes","parenthesis"],["numbers and strings","booleans","all of the above"],["Quotes","curly brackets", "parenthesis", "square brackets"],["strings","booleans","alets"]],
    correctOption:["console.log","quotes","all of the above","curly brackets","alerts"]
};


//write code to generate HTML of questions via DOM manuipulation

//wrtie code to set answers to questions
//wrtie code to determine randow order of questions

//write code to calculate than display timer
var stats = document.querySelector("#display-stats");
var startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function() {
    var timer = document.createElement("h2");
    var score = document.createElement("h2"); 
    timer.className = "stats";
    timer.id = ("time-left")
    score.className = "stats";
    timer.textContent = "Time Remaining: " + timeLeft;
    score.textContent = "Current Score: ";
    stats.appendChild(timer);
    stats.appendChild(score);       
});

var timeLeft = 60;






// wrtie code to start quiz and stop quiz when timer hits 0
//write  code to calculate than display score during test
//write code to take score and time down if player gets a question wrong
//write code to display all recorded scores in local storage and save on scores.html
 
