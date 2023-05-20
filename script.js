let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

document.getElementById("b1").addEventListener("click", function() {
  playGame("rock");
});
document.getElementById("b2").addEventListener("click", function() {
  playGame("paper");
});
document.getElementById("b3").addEventListener("click", function() {
  playGame("scissors");
});

function computer() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function playGame(playerSelection) {
    let computerSelection = computer();
    let result = "";

    if (playerSelection === computerSelection) {
      result = "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      result = "You win!";
      playerScore++;
    } else {
      result = "Computer wins!";
      computerScore++;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore === winningScore) {
      announceWinner("Player");
    } else if (computerScore === winningScore) {
      announceWinner("Computer");
    }
}

function announceWinner(winner) {
    document.getElementById("result").textContent = `${winner} wins the game!`;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
}