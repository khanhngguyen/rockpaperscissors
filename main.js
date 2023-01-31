function computerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

//single Round, declare winner & loser of each round
function playRound (playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection}`);
    console.log(`Computer's choice is ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === 'rock') {
        //if player chooses rock
        if (computerSelection === 'paper') {
            return "You loose, Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            return "You win, Rock beats Scissors"
        }
    } else if (playerSelection === 'paper') {
        //if player chooses paper
        if (computerSelection === 'rock') {
            return "You win, Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            return "You loose, Scissors beat Paper"
        }
    } else if (playerSelection === 'scissors') {
        //if scissors
        if (computerSelection === 'rock') {
            return "You loose, Rock beats Scissors"
        } else if (computerSelection === 'paper') {
            return "You win, Scissors win Paper"
        }
    }
}

const playerSelection = 'paper';
const computerSelection = computerChoice();
console.log(playRound(playerSelection, computerSelection));