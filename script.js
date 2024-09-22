const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let choice = prompt(
    "Type the number corresponding to your choice. 1: rock, 2: paper, 3: scissors",
    1
  );

  if (choices[choice - 1] == undefined) {
    getHumanChoice();
  }

  return choices[choice - 1];
}

function reportScore(humanScore, computerScore) {
  if (humanScore === computerScore) {
    console.log(`You tied! ${humanScore} - ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(`You won! ${humanScore} - ${computerScore}`);
  } else {
    console.log(`You lost! ${humanScore} - ${computerScore}`);
  }
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  let humanScore = 0;
  let computerScore = 0;

  for (let step = 0; step < 5; step++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  reportScore(humanScore, computerScore);
}

playGame();
