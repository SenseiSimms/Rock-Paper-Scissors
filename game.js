// Line of code to let the computer choose randomly.

function getComputerChoice () {
    const moves = ['ROCK', 'PAPER', 'SCISSORS'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function resetGame() {
    //Resets game


}

// Sets the player and computer score to 0

let playerScore = 0;

let compScore = 0;

let tieScore = 0;

function updatePlayerScore() {
    console.log(`${playerScore}`);

    const playerScoreResult = document.getElementById("p1Score")

    playerScoreResult.textContent = playerScore;
};

function updateCompScore() {
    console.log(`${compScore}`);

    const compScoreResult = document.getElementById("compScore")

    compScoreResult.textContent = compScore;
};

function updateTieScore() {
    console.log(`${tieScore}`);

    const tieScoreResult = document.getElementById("tieScore")

    tieScoreResult.textContent = tieScore;
};




const compChoice = getComputerChoice();
const playerChoice = document.querySelector("btn");

let tieRound = `Tie round, both of you picked ${playerChoice}.`;
let winRound = `You win, ${playerChoice} beats ${compChoice}.`;
let loseRound = `You lose, ${compChoice} beats ${playerChoice}.`;

let playerWinsGame = 'Congratulations, you win the match!';
let compWinsGame = 'Sorry you lost, computer wins the match!';


function playRound(playerChoice, compChoice) {
    if (playerChoice === compChoice) {tieScore++
        updateTieScore()
        return tieRound
    } else if (playerChoice == 'ROCK' && compChoice == 'SCISSORS' || playerChoice == 'PAPER' && compChoice == 'ROCK' || playerChoice == 'SCISSORS' && compChoice == 'PAPER') {
        playerScore++
        updatePlayerScore()
        return winRound} 
        else {
            compScore++
            updateCompScore()
            return loseRound};
        };





function startGame() {
    
    //plays the game until someone wins 5 rounds

    let buttons = document.querySelectorAll("button")
    buttons.forEach((button) => buttons.addEventListener(('click'), () => {
        if (button.id) {
            playRound(button.id);
        }}
    )
    );


    if (playerScore > compScore && playerScore >= 5) 
    {return playerWinsGame} else 
    if (compScore > playerScore && compScore >= 5) {
            return compWinsGame
        } else
        {
            return 'Tie Match, good job!';
}};


// Plays a single round of paper,rock,scissors



// sets up a round of rock,paper, scissors and the conditions for each turn

    
    
// plays multiple rounds and determines a winner based off who has a higher score at the end


    



