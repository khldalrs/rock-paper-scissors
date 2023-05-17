function computer() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function playGame(playerSelection) {
    let computerSelection = computer();
    var result = "";
    if (playerSelection === computerSelection) {
      result = "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }

    document.getElementById("result").innerHTML = result;
}

  