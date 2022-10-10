


function getComputerChoice () {
    const moves = ['ROCK', 'PAPER', 'SCISSORS'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return tieRound;
    } else if (playerChoice == 'ROCK' && compChoice == 'SCISSORS') {
        return winRound; } 
        else if (playerChoice == 'PAPER' && compChoice == 'ROCK'){return winRound;} 
        else if (playerChoice == 'SCISSORS' && compChoice == 'PAPER') {return winRound;} else {return loseRound;}
}

let tieRound = 'Tie Game';
let playerChoice = 'rock';
const playerResult = playerChoice.toUpperCase();
const compChoice = getComputerChoice();
let winRound = 'You win, ' + playerResult + ' beats ' + compChoice + '.';
let loseRound = 'You lose, ' + playerResult + ' loses to ' + compChoice + '.';
let playerWinsGame = 'Congratulations, you win the match!';
let compWinsGame = 'Sorry you lost, computer wins the match!';

function game() {
for (let i = 0; i < 5; i++) {
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    let roundResult = playRound(playerChoice, compChoice);
    console.log(roundResult);
    console.log('Your score is  ' + playerScore);
    console.log('The computer score is  ' + compScore);
    if (playerScore === 5 || compScore === 5) {
        break;
    }
}
}

let playerScore = 0;
let compScore = 0;
let tieScore = 0;

function gameScore (result) {
    let result = playRound();

    if (result === winRound) {
        playerScore++;
    } else if (result === tieRound) {
        tieScore++;
    } else {compScore++;}

    if (playerScore === 5) {console.log(playerWinsGame);
}

if (compScore === 5) {
    console.log(compWinsGame);
}

}

