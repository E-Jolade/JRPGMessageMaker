let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random() * 9) + 1;
}

function compareGuesses(humanGuess, computerGuess, targetNumber){
    if (Math.abs(targetNumber - humanGuess) > Math.abs(targetNumber - computerGuess)){
        return false;
    }
    else{
        return true;
    }
}

function updateScore(winner){
    switch (winner){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            console.log('This is awkward');
            break;
    }
}

function advanceRound(){
    currentRoundNumber++;
}