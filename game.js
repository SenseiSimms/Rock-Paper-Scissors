// Line of code to let the computer choose randomly.

function getComputerChoice () {
    const moves = ['ROCK', 'PAPER', 'SCISSORS'];
    return moves[Math.floor(Math.random() * moves.length)];
}

// Sets the player and computer score to 0

let playerScore = 0;
let compScore = 0;

// Plays a single round of paper,rock,scissors

function playRound(playerChoice, compChoice) {
let tieRound = 'Tie Game, both of you picked ' + playerChoice + '.';
let winRound = 'You win, ' + playerChoice + ' beats ' + compChoice + '.';
let loseRound = 'You lose, ' + playerChoice + ' beats ' + compChoice + '.';


// sets up a round of rock,paper, scissors and the conditions for each turn

    if (playerChoice === compChoice) {
        return tieRound
    } else if (playerChoice == 'ROCK' && compChoice == 'SCISSORS') {
        playerScore++
        return winRound} 
        else if (playerChoice == 'PAPER' && compChoice == 'ROCK'){
            playerScore++
            return winRound} 
        else if (playerChoice == 'SCISSORS' && compChoice == 'PAPER') {return winRound} else {
            compScore++
            return loseRound} 
        }

// plays multiple rounds and determines a winner based off who has a higher score at the end

function game() {
for (let i = 0; i < 5; i++) {
    let playerChoice = prompt('Choose your move; Rock, Paper, or Scissors?');
    const playerResult = playerChoice.toUpperCase();
    const compChoice = getComputerChoice();
    let roundResult = playRound(playerResult, compChoice);
    console.log(roundResult);
    console.log('Your score is  ' + playerScore);
    console.log('The computer score is  ' + compScore);
    }

    let playerWinsGame = 'Congratulations, you win the match!';
let compWinsGame = 'Sorry you lost, computer wins the match!';

if (playerScore > compScore) 
    {return playerWinsGame} else 
    if (compScore > playerScore) {
            return compWinsGame
        } else
        {
            return 'Tie Match, good job!';
    }
}
    


console.log(game())
