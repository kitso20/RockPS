const element = document.getElementById("score");
const robotChoiceElement = document.getElementById("choice");
const ResutlElement = document.getElementById("Results");


const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let robotScore = 0;
function getRobotChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function determineWinner(playerChoice, robotChoice) {
  if (playerChoice === robotChoice) {
    return "tie";
  }
    if ((playerChoice === "rock" && robotChoice === "scissors") ||
        (playerChoice === "paper" && robotChoice === "rock") ||
        (playerChoice === "scissors" && robotChoice === "paper")) {
    return "player";
  }
    return "robot";
}
function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "robot") {
    robotScore++;
  }
  element.textContent = `${playerScore} - ${robotScore}`;
}
function play(playerChoice) {
    ResutlElement.textContent = "";
  const robotChoice = getRobotChoice();
  let emoji = "";
  if (robotChoice === "rock") emoji = "✊🏿";
  else if (robotChoice === "paper") emoji = "🖐🏿";
  else if (robotChoice === "scissors") emoji = "✌🏿";
  robotChoiceElement.textContent = emoji;
  const winner = determineWinner(playerChoice, robotChoice);
  updateScore(winner);
  ResutlElement.textContent += ` ${winner === "player" ? "You win!" : winner === "robot" ? "Robot wins!" : "It's a tie!"}`;
}
document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));

