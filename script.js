// Get Computer Prediction
function computerPrediction() {
    return Math.floor(Math.random() * 3);
}

// Get Human Prediction from Buttons
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

// Compare who won and who lost using if statements and update score
const humanScore = document.querySelector(".human");
let humanScoreCount = 0;
const computerScore = document.querySelector(".comp");
let computerScoreCount = 0;
const playerPick = document.querySelector(".player");
const computerPick = document.querySelector(".computer");

btnRock.addEventListener("click", () => {
    playerPick.innerText = "Your Pick: Rock"
    let computer = computerPrediction();
    if (computer === 1) {
        computerScoreCount++;
        computerScore.innerText = computerScoreCount;
        computerPick.innerText = "Computer's Pick: Paper";
    } else if (computer === 2) {
        humanScoreCount++;
        humanScore.innerText = humanScoreCount;
        computerPick.innerText = "Computer's Pick: Scissors";
    } else {
        computerPick.innerText = "Computer's Pick: Rock";
    }
});


btnPaper.addEventListener("click", () => {
    playerPick.innerText = "Your Pick: Paper"
    let computer = computerPrediction();
    if (computer === 2) {
        computerScoreCount++;
        computerScore.innerText = computerScoreCount;
        computerPick.innerText = "Computer's Pick: Scissors";
    } else if (computer === 0) {
        humanScoreCount++;
        humanScore.innerText = humanScoreCount;
        computerPick.innerText = "Computer's Pick: Rock";
    } else {
        computerPick.innerText = "Computer's Pick: Paper";
    }
});


btnScissors.addEventListener("click", () => {
    playerPick.innerText = "Your Pick: Scissors"
    let computer = computerPrediction();
    if (computer === 0) {
        computerScoreCount++;
        computerScore.innerText = computerScoreCount;
        computerPick.innerText = "Computer's Pick: Rock";
    } else if (computer === 1) {
        humanScoreCount++;
        humanScore.innerText = humanScoreCount;
        computerPick.innerText = "Computer's Pick: Paper";
    } else {
        computerPick.innerText = "Computer's Pick: Scissors";
    }
});


// if score = 5, announce winner