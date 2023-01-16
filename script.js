// Get random choice from computer player
const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice == 1) {
    choice = "rock";
  } else if (choice == 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
};

// Play one round of Rock, Paper Scissors
let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer Wins!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player wins!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer Wins!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer Wins!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player wins!";
  } else {
    return "Please enter a valid input";
  }
};

// Initialize game and ask user for input
let game = () => {
  const computerSelection = getComputerChoice();
  const playerSelection = prompt("Please choose rock, paper or scissors");
  return playRound(playerSelection, computerSelection);
};

// Keep track of scores
let myScore = 0;
let computerScore = 0;

// Define number of game to play
for (i = 0; i < 5; i++) {
  let playedGame = game();
  if (playedGame == "Computer Wins!") {
    computerScore++;
  } else if (playedGame == "Player wins!") {
    myScore++;
  } else {
    console.log("Draw!");
  }
  console.log(`Your Score is: ${myScore}`);
  console.log(`Computer's score is: ${computerScore}`);
}

// Print final score after game rounds
console.log(`
  Final score:
  Player: ${myScore}.
  Computer: ${computerScore}.
  `);

// Determine Winner and log it
if (computerScore > myScore) {
  console.log("Computer Wins!");
} else if (computerScore < myScore) {
  console.log("Player Wins!");
} else {
  console.log("Draw!");
}
