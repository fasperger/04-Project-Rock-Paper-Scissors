// Get random choice from computer player
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice == 1) {
    choice = "rock";
  } else if (choice == 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

// Logic for the game to work
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return 2;
  } else {
    return "Please enter a valid input";
  }
}

let myScore = 0;
let computerScore = 0;
// Play the game!

function game(id) {
  if (myScore < 5 && computerScore < 5) {
    const playerSelection = id;
    const computerSelection = getComputerChoice();

    let gameResult = playRound(playerSelection, computerSelection);

    if (gameResult == 1) {
      document.querySelector("#results").textContent =
        "Computer Wins This round!";
      computerScore++;
      document.querySelector(".compScore").textContent = computerScore;
    } else if (gameResult == 2) {
      document.querySelector("#results").textContent = "You Win This round!";
      myScore++;
      document.querySelector(".myScore").textContent = myScore;
    } else {
      document.querySelector("#results").textContent = "It's a Draw!";
    }

    if (myScore == 5 || computerScore == 5) {
      if (myScore > computerScore) {
        document.querySelector("#final").textContent = "You win the game!";
      } else {
        document.querySelector("#final").textContent =
          "Computer wins the game!";
      }
    }
  }
}
