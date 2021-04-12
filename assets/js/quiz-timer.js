let allScores = [];
let highScores = [];
let userScore = 0;
let body = document.body;
let h1El = document.createElement('h1');
let timesUpMessage =
    'TIMES UP!';
let words = timesUpMessage.split(' ');
let timesUpParaEl = document.getElementById('loseMessage');
let timerEl = document.getElementById('timer');
let questionIndex = 0;
let currentQuestion = avengersQuestions[questionIndex];
let currentChoices = currentQuestion.choices;

let buttonEl = document.getElementById("buttons");
let timeLeft = 30;
let titleEl = document.getElementById("question-title");
let createButtonEl = document.createElement("button");


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
}
// begin countdown
let startTimer = function () {
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
// function presentQuestion() {
//     console.log("present question begins");
//     console.log(questionIndex);
//     // for (let i = 0; i < avengersQuestions.length; i++) {
//         titleEl.textContent = currentQuestion.question;
//         // for (let i = 0; i < currentChoices.length; i++) {
//         createButtonEl.textContent = currentChoices[questionIndex];
//         buttonEl.appendChild(createButtonEl);
//         questionIndex++;
//         console.log(questionIndex);
//     // }
// }

function presentQuestion() {
    buttonEl.innerHTML = '';
    // console.log('questionIndex:', questionIndex);
    // console.log('avengersQuestions[questionIndex]:', avengersQuestions[questionIndex]);
    titleEl.textContent = avengersQuestions[questionIndex].question;
    for (let i = 0; i < currentChoices.length; i++) {
        var btn = document.createElement('button');
        btn.innerText = avengersQuestions[questionIndex].choices[i];
        buttonEl.appendChild(btn);
    }
}

let answerButtonHandler = function (event) {
    let targetButton = event.target;
    console.log("targetButton");
    if (targetButton.textContent === avengersQuestions[questionIndex].answer) {
        console.log('hello');
        let feedback = document.getElementById("feedback");
        feedback.textContent = "Earth is closed for today!";
        userScore++;
        console.log(userScore);
        document.getElementById('userScoreContainer').innerHTML = (userScore);
    }
    // remove penalty for time and then go to present questions
    else {
        feedback.textContent = "you fed up aaron";
        // how do I decrement the timer? 
        timeLeft = timeLeft - 10;
        console.log(timeLeft);
        userScore = userScore;
        document.getElementById('userScoreContainer').innerHTML = (userScore);
    }
    questionIndex++;
    presentQuestion();
}
console.log(userScore);
//Put User Score on Page 


// // present this screen if user runs out of time or has answered all the questions.  Enter name. 
// let endGame = function () {
//     console.log("endgame has started");
//     let quizContainer = getElementById('quizContainer');
//     quizContainer.remove();
//     clearInterval(timer);
//     //INPUT SCORE SCREEN
//     h1El.textContent = "TIMES UP!";
//     body.appendChild(h1El);
//     console.log("endgame?");

// }



// // after input store user name and score as array to be collected in local storage and added to allScores
// var highScoresArray = [];
// // let userScore = function () {

// // }
// // calculate high score 
// let highScoresCalc = function () {

// }
startQuiz();
buttonEl.addEventListener("click", answerButtonHandler);
if (timeLeft <= 0) {
    endGame();
}
// console.log("endgame has run?")
