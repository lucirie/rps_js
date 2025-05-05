// Get Computer Prediction
function computerPrediction() {
    return Math.floor(Math.random() * 3);
}

// Get Human Prediction from Buttons
btnRock = document.querySelector("rock");
btnPaper = document.querySelector("paper");
btnScissors = document.querySelector("scissors");

// Compare who won and who lost using if statements and update score

// if score = 5, announce winner