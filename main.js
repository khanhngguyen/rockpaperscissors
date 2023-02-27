const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function computerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

//single Round, declare winner & loser of each round
function playRound (playerSelection, computerSelection) {
    document.querySelector('.player').textContent = `You've selected: ${playerSelection}`;
    document.querySelector('.computer').textContent = `Computer's choice is: ${computerSelection}`;
    //console.log(`You selected ${playerSelection}`);
    //console.log(`Computer's choice is ${computerSelection}`);
    if (playerSelection === computerSelection) {
        document.querySelector('.game-result').textContent = "It's a tie";
        //return "It's a tie";
    } else if (playerSelection === 'rock') {
        //if player chooses rock
        if (computerSelection === 'paper') {
            computerScore++;
            document.querySelector('.game-result').textContent = "You loose, Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            playerScore++;
            document.querySelector('.game-result').textContent = "You win, Rock beats Scissors"
        }
    } else if (playerSelection === 'paper') {
        //if player chooses paper
        if (computerSelection === 'rock') {
            playerScore++;
            document.querySelector('.game-result').textContent = "You win, Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            computerScore++;
            document.querySelector('.game-result').textContent = "You loose, Scissors beat Paper"
        }
    } else if (playerSelection === 'scissors') {
        //if scissors
        if (computerSelection === 'rock') {
            computerScore++;
            document.querySelector('.game-result').textContent = "You loose, Rock beats Scissors"
        } else if (computerSelection === 'paper') {
            playerScore++;
            document.querySelector('.game-result').textContent = "You win, Scissors win Paper"
        }
    }
}

// const playerSelection = 'paper';
// const computerSelection = computerChoice();
// console.log(playRound(playerSelection, computerSelection));

/* function game (playerChoice) {
    //let round = 0;
    for (let i = 1; i < 6; i++) {
        //let player = prompt("Choose Rock, Papper or Scissors");
        //make playerSelection case-insensitive (e.g. ROCK, rOCk, paper are all okay)
        //playerSelection = player.toLowerCase();
        console.log(i);
        let playerSelection = playerChoice;
        let computerSelection = computerChoice();
        document.querySelector('.game-round').textContent = `Round: ${i}`;
        //console.log(`Round: ${i}`);
        playRound(playerSelection, computerSelection);
        
        document.querySelector('.player-score').textContent = `Your score: ${playerScore}`;
        document.querySelector('.computer-score').textContent = `Computer's score: ${computerScore}`;

       console.log(`You score: ${playerScore}. Computer score: ${computerScore}`);
    }
} */

function game (playerChoice) {
    let playerSelection = playerChoice;
    let computerSelection = computerChoice();
    round++;
    playRound(playerSelection, computerSelection);
    document.querySelector('.game-round').textContent = `Round: ${round}`;
    document.querySelector('.player-score').textContent = `Your score: ${playerScore}`;
    document.querySelector('.computer-score').textContent = `Computer's score: ${computerScore}`;
    //console.log(`You score: ${playerScore}. Computer score: ${computerScore}`)
    if (round > 4) {
        endGame(playerScore, computerScore)
    }
} 

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));

function endGame (playerScore, computerScore) {
    if (playerScore == computerScore) {
        document.querySelector(".final-result").textContent = "It's a tie"
    } else if (playerScore > computerScore) {
        document.querySelector(".final-result").textContent = "Congratulations! You've won"
        document.querySelector(".final-result").style.color = "green"
    } else if (playerScore < computerScore) {
        document.querySelector(".final-result").textContent = "Oh no! You've lost"
        document.querySelector(".final-result").style.color = "red"
    }
    document.querySelector(".player").style.display = "none"
    document.querySelector(".computer").style.display = "none"
    const reset = document.querySelector(".reset")
    reset.style.display = "contents";
    reset.style.cursor = "pointer";
    reset.addEventListener("click", () => {
        location.reload();
    })
}

//console.log(game());