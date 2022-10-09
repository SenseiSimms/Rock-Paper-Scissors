function getComputerChoice () {
    const moves = ['ROCK', 'PAPER', 'SCISSORS'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        return 'Tie Game';
    } else if (playerChoice == 'ROCK') {
        if (compChoice == 'PAPER') {return lose;} else{return win;}
    }
}

let playerChoice = 'rock';
const playerResult = playerChoice.toUpperCase();
const compChoice = getComputerChoice();
let win = 'You win, ' + playerResult + ' beats ' + compChoice + '.';
let lose = 'You lose, ' + playerResult + ' loses to ' + compChoice + '.';


console.log(playRound(playerResult, compChoice))