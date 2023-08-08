let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  if (randNum === 0){
    return "Rock";
  } else if (randNum === 1){
    return "Paper";
  } else if (randNum === 2){
    return "Scissors";
  }
}

function round(playerSelection, computerSelection){

  if (playerSelection === computerSelection){
    console.log("Thats a Tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("You Lose! Paper beats Rock");
    computerPoints++;
  } else if (playerSelection === "scissors" && computerSelection === "paper"){
    console.log("You Win! Scissors beats Paper");
    playerPoints++;
  } else if (playerSelection === "paper" && computerSelection === "rock"){
    console.log("You Win! Paper beats Rock");
    playerPoints++;
  } else if (playerSelection === "scissors" && computerSelection === "rock"){
    console.log("You Lose! Rock beats Scissors");
    computerPoints++;
  } else if (playerSelection === "paper" && computerSelection === "scissors"){
    console.log("You Lose! Scissors beats Paper");
    computerPoints++;
  } else if (playerSelection === "rock" && computerSelection === "scissors"){
    console.log("You Win! Rock beats Scissors");
    playerPoints++;
  }
}

function game(){

  for (i = 1; i <= 5; i++){
    let playerSelection = prompt("Choose between Rock, Paper and Scissors: ").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    round(playerSelection, computerSelection);
    console.log("Player: " + playerPoints);
    console.log("Computer: " + computerPoints);
  }

  if(playerPoints === computerPoints){
    console.log("Tie!");
  } else if (playerPoints > computerPoints){
    console.log("You Win the Game! ");
  } else if (computerPoints < playerPoints){
    console.log("You Lose the Game...");
  }
}  
