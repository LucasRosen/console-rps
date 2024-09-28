const choices = ["rock", "paper", "scissors"];

function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateStatus(winner, humanChoice, computerChoice) {
  const capsHumanChoice = capitalizeFirst(humanChoice);
  const capsComputerChoice = capitalizeFirst(computerChoice);

  if (winner === "human") {
    statusText.textContent = `${capsHumanChoice} beats ${computerChoice}! \nYou win!`;
  } else if (winner === "computer") {
    statusText.textContent = `${capsComputerChoice} beats ${humanChoice}! \nYou lose!`;
  } else {
    statusText.textContent = "Tie!";
  }
}

function updateScoreboard() {
  scoreboard.textContent = `${humanScore} - ${computerScore}`
}

function getWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
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

function playRound(humanChoice, computerChoice) {
  const winner = getWinner(humanChoice, computerChoice);
  if (winner === "human") {
    humanScore++;
    updateStatus(winner, humanChoice, computerChoice);
  } else if (winner === "computer") {
    computerScore++;
    updateStatus(winner, humanChoice, computerChoice);
  } else {
    updateStatus(winner, humanChoice, computerChoice);
  }

  updateScoreboard();
}

let humanScore = 0;
let computerScore = 0;

const statusText = document.querySelector("#status");
const scoreboard = document.querySelector("#scoreboard");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let humanChoice = event.target.id;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
