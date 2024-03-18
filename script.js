"use strict"

// function getComputerChoice() {
//   const cpu = Math.floor(Math.random() * 3)
//   if (cpu > 1) {
//     console.log("Rock);
//   } else if (cpu < 1) {
//     console.log("Paper");
//   } else console.log("Scissors");
//   console.log(cpu);
//   return cpu;
// }
// getComputerChoice();




function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors?", "Please enter your choice.")
  if (playerSelection === null || playerSelection === "") {
    alert("Game cancelled")
    return
  }

  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {

  } else {
    alert("Incorrect Entry. Please type only \"Rock\", \"Paper\" or \"Scissors\".")
    playRound();
  }

  // ComputerSelection: 0 = Rock, 1 = Paper, 2 = Scissors
  
  computerSelection = Math.floor(Math.random() * 3)
  if (computerSelection === 2 && playerSelection === "rock") {
    console.log("Player chooses Rock, Computer chooses Scissors");
    console.log("Player Wins!");
  } else if (computerSelection === 1 && playerSelection === "rock") {
    console.log("Player chooses Rock, Computer chooses Paper");
    console.log("Player Loses!");
  } else if (computerSelection === 0 && playerSelection === "paper") {
    console.log("Player chooses Paper, Computer chooses Rock");
    console.log("Player Wins!");
  } else if (computerSelection === 2 && playerSelection === "paper") {
    console.log("Player chooses Paper, Computer chooses Scissors");
    console.log("Player Loses!");
  } else if (computerSelection === 1 && playerSelection === "scissors") {
    console.log("Player chooses Scissors, Computer chooses Paper");
    console.log("Player Wins!");
  } else if (computerSelection === 0 && playerSelection === "scissors") {
    console.log("Player chooses Scissors, Computer chooses Rock");
    console.log("Player Loses!");
  } else if (computerSelection === 0 && playerSelection === "rock" 
             || computerSelection === 1 && playerSelection === "paper" 
             || computerSelection === 2 && playerSelection === "scissors"){
    console.log(`Both players chose ${playerSelection}!`);
    console.log(("It's a Tie!"));
  }

}
playRound();



