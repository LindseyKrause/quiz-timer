let allScores = [];
let highScores = [];
let userScore = 0;
let body = document.body;
let h1El = document.createElement('h1');
let timesUpMessage =
    'SNAP! Half of the Avengers (and the world) has now disappeared';
let words = timesUpMessage.split(' ');
let timesUpParaEl = document.getElementById('loseMessage');
let timerEl = document.getElementById('timer');
let questionIndex = 0;
let i = 0;
let currentQuestion = avengersQuestions[questionIndex];
let buttonEl = document.getElementById("buttons");
let timeLeft = 30;

// Ask if ready to begin quiz 
// if confirm then start timer and present question else "ok leave"
let startQuiz = function () {
    let startQuizConfirm = confirm("This is most possibly the hardest thing you will ever do. Do you dare begin?");
    if (startQuizConfirm) {
        h1El.textContent = "Avengers Assemble!";
        body.appendChild(h1El);
        presentQuestion();
        startTimer();
    } else {
        window.alert("I am inevitable");
    }
    console.log("start quiz finished");
}

// begin countdown
let startTimer = function () {
    let timeLeft = 30;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
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
let timesUp = function () {
    let wordCount = 0;
    // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
    let msgInterval = setInterval(function () {
        if (words[wordCount] === undefined) {
            clearInterval(msgInterval);
        } else {
            timesUpParaEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 2000);
}

// grab item from let avengersQuestions for loop?
function presentQuestion() {
    console.log("present question begins");
        let titleEl = document.getElementById("question-title");
        titleEl.textContent = currentQuestion.question;
        let currentChoices = currentQuestion.choices;
        for (let i = 0; i < currentChoices.length; i++) {
            let createButtonEl = document.createElement("button");
            createButtonEl.textContent = currentChoices[i];
            buttonEl.appendChild(createButtonEl);
            console.log(createButtonEl);
        }
    }


//this button handler is logging when clicked, but how do I refer to the correct answer? 
let answerButtonHandler = function (event) {
    let targetButton = event.target;
    console.log("targetButton");
    if (targetButton.textContent === currentQuestion.answer) {
        console.log('hello');
        let feedback = document.getElementById("feedback");
        feedback.textContent = "Earth is closed for today!";
        userScore++;
        console.log(userScore);
    }
    // remove penalty for time and then go to present questions
    else {
        feedback.textContent = "you fed up aaron";
        // how do I decrement the timer? 
    }
    currentQuestion++;
}

// remove penalty for time and then go to present questions
// // present this screen if user runs out of time or has answered all the questions.  Enter name. 
let endGame = function () {

}
// after input store user name and score as array to be collected in local storage and added to allScores
// let userScore = function () {

// }
// calculate high score 
let highScoresCalc = function () {

}
startQuiz();
startTimer();
buttonEl.addEventListener("click", answerButtonHandler);
