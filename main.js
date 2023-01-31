function computerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

let playerScore = 0;
let computerScore = 0;

//single Round, declare winner & loser of each round
function playRound (playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection}`);
    console.log(`Computer's choice is ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === 'rock') {
        //if player chooses rock
        if (computerSelection === 'paper') {
            computerScore++;
            return "You loose, Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            playerScore++;
            return "You win, Rock beats Scissors"
        }
    } else if (playerSelection === 'paper') {
        //if player chooses paper
        if (computerSelection === 'rock') {
            playerScore++;
            return "You win, Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            computerScore++;
            return "You loose, Scissors beat Paper"
        }
    } else if (playerSelection === 'scissors') {
        //if scissors
        if (computerSelection === 'rock') {
            computerScore++;
            return "You loose, Rock beats Scissors"
        } else if (computerSelection === 'paper') {
            playerScore++;
            return "You win, Scissors win Paper"
        }
    }
}

// const playerSelection = 'paper';
// const computerSelection = computerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game () {
    let round = "";
    for (let i = 1; i < 6; i++) {
        let player = prompt("Choose Rock, Papper or Scissors");
        //make playerSelection case-insensitive (e.g. ROCK, rOCk, paper are all okay)
        playerSelection = player.toLowerCase();
        let computerSelection = computerChoice();
        console.log(`Round: ${i}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`You score: ${playerScore}. Computer score: ${computerScore}`);
    }
}

console.log(game());