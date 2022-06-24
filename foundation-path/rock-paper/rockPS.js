function computerPlay() {
    // Random selection by the game

    const gameChoice = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * gameChoice.length);

    return gameChoice[index];
}

function playRound(playerSelection, computerSelection) {
    computerScore = 0;
    playerScore = 0;

    //   Evaluate winner in each round; append score to tally.
    if (
        computerSelection === playerSelection ||
        (computerSelection == "rock" && playerSelection == "scissors")
    ) {
        playerScore, (computerScore += 0);
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore += 1;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore += 1;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore += 1;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore += 1;
    }

    //   Evaluate score
    let score = " Score: You: " + playerScore + " Computer: " + computerScore;
    message =
        computerScore > playerScore ? "You lost!" + score : "You won!" + score;
    return message;
}

function game(rounds) {
    let result = []; // Store results

    //   Loop game rounds and append result to list
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Enter choice, Rock, Paper, Scissors:");
        result.push(playRound(playerSelection.toLowerCase(), computerPlay()));
    }
    return result[result.length - 1]; // Return last result in list
}

numRounds = parseInt(prompt("Enter number of rounds to play:"));
console.log(game(numRounds));
