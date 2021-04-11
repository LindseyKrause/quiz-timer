var allScores = [];
var highScores = [];
var body = document.body;
var h1El = document.createElement('h1');
var timerEl = document.getElementById('timer');
var timesUpMessage =
    'SNAP! Half of the Avengers (and the world) has now disappeared';
var words = timesUpMessage.split(' ');
var timesUpParaEl = document.getElementById('loseMessage');
var timerEl = document.getElementById('timer');
let questionIndex = 0;
let i = 0;



// Ask if ready to begin quiz 
// if confirm then start timer and present question else "ok leave"
var startQuiz = function () {
    var startQuizConfirm = confirm("This is most possibly the hardest thing you will ever do. Do you dare begin?");
    if (startQuizConfirm) {
        h1El.textContent = "Avengers Assemble!";
        body.appendChild(h1El);
        presentQuestion();
        startTimer;
    } else {
        window.alert("I am inevitable");
    }
    console.log(startQuiz);
}
// begin countdown
var startTimer = function () {
    var timeLeft = 5;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            timesUp();
        }
    }, 1000);
    console.log(startTimer);
}
//Tell user that Thanos has snapped
var timesUp = function () {
    var wordCount = 0;
    // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
    var msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
        } else {
            timesUpParaEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 2000);
}

// grab item from var avengersQuestions for loop?
function presentQuestion() {
    let currentQuestion = avengersQuestions[questionIndex];
    console.log(currentQuestion.question);
    let titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.question;
    let currentChoices = currentQuestion.choices;
    var buttonEl = document.getElementById ("buttons");
    for (var i = 0; i < currentChoices.length; i++) {
    var createButtonEl = document.createElement("button");
    createButtonEl.textContent = currentChoices[i];
    buttonEl.appendChild(createButtonEl);
    console.log(createButtonEl);
}
}

// if input = answer then write Hooray! if input does not equal answer then var deduct time
var evaluateAnswer = function () {

}
// remove penalty for time and then go to present questions
var deductTime = function () {

}
// present this screen if user runs out of time or has answered all the questions.  Enter name. 
var endGame = function () {

}
// after input store user name and score as array to be collected in local storage and added to allScores
var userScore = function () {

}
// calculate high score 
var highScoresCalc = function () {

}
startQuiz();
startTimer();
