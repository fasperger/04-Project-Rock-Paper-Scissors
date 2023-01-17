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

// Play the game!
function game() {
  let myScore = 0;
  let computerScore = 0;

  // Play 5 rounds of the game!
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please choose rock, paper or scissors");
    const computerSelection = getComputerChoice();
    let gameResult = playRound(playerSelection, computerSelection);
    if (gameResult == 1) {
      console.log("Computer Wins this round!");
      computerScore++;
    } else if (gameResult == 2) {
      console.log("You Win this round!");
      myScore++;
    } else {
      console.log("It's a Draw!");
    }
  }

  console.log(`Your final score is: ${myScore}`);
  console.log(`Computer's final score is: ${computerScore}`);

  if (myScore == computerScore) {
    console.log("It's a Draw!");
  } else if (myScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("Computer wins the game!");
  }
}

game();
