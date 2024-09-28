const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getNewStatus(humanScore, computerScore) {
  if (humanScore === computerScore) {
    return `You tied! ${humanScore} - ${computerScore}`;
  } else if (humanScore > computerScore) {
    return `You won! ${humanScore} - ${computerScore}`;
  } else {
    return `You lost! ${humanScore} - ${computerScore}`;
  }
}

function getWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else {
    return "computer";
  }
}
