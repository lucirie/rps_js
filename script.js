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

const winner = document.querySelector(".winner");

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
    checkWinner();
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
    checkWinner();
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
    checkWinner();
});


// if score = 5, announce winner

function checkWinner() {
    if (computerScoreCount === 5) {
        winner.textContent = "Computer Wins!!"
        computerScoreCount = 0;
        humanScoreCount = 0;
        humanScore.innerText = humanScoreCount;
        computerScore.innerText = computerScoreCount;
    } else if (humanScoreCount === 5) {
        winner.textContent = "You Win!!"
        computerScoreCount = 0;
        humanScoreCount = 0;
        humanScore.innerText = humanScoreCount;
        computerScore.innerText = computerScoreCount;
    }
}