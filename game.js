

// Line of code to let the computer choose randomly.

function getComputerChoice () {
    const moves = ['ROCK', 'PAPER', 'SCISSORS'];
    return moves[Math.floor(Math.random() * moves.length)];
}

let playerScore = 0;
    let compScore = 0;

// Plays a single round of paper,rock,scissors

function playRound(playerChoice, compChoice) {
let tieRound = 'Tie Game';
let winRound = 'You win, ' + playerChoice + ' beats ' + compChoice + '.';
let loseRound = 'You lose, ' + playerChoice + ' beats ' + compChoice + '.';



    if (playerChoice === compChoice) {
        return tieRound;
    } else if (playerChoice == 'ROCK' && compChoice == 'SCISSORS') {
        playerScore++;
        return winRound;} 
        else if (playerChoice == 'PAPER' && compChoice == 'ROCK'){
            playerScore++;
            return winRound;} 
        else if (playerChoice == 'SCISSORS' && compChoice == 'PAPER') {return winRound;} else {
            compScore++;
            return loseRound;} }


function game() {
for (let i = 0; i < 8; i++) {
    
    let playerWinsGame = 'Congratulations, you win the match!';
let compWinsGame = 'Sorry you lost, computer wins the match!';
    let playerChoice = prompt('Choose your move, Rock Paper or Scissors?');
const playerResult = playerChoice.toUpperCase();
const compChoice = getComputerChoice();
    let roundResult = playRound(playerResult, compChoice);
    console.log(roundResult);
    console.log('Your score is  ' + playerScore);
    console.log('The computer score is  ' + compScore);
    if (playerScore > 5 || compScore > 5) {
        break;}
    if (playerScore > compScore) 
    {
        return playerWinsGame;} else if (compScore > playerScore) {
            return compWinsGame;
        }
    }
}


game()
