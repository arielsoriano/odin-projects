

console.log('Welcome to Rock, Paper, Scissors!');

function getComputerChoice() {
    switch(Math.floor(Math.random() * (3 - 1 + 1) + 1)){
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
}

function playerSelection(){
    //TODO: check data before return
    return prompt('Write your choice').toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    //console.log("Player Selection: " + playerSelection + " Computer Selection: " + computerSelection);
    if ( 
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ) return 'won';
    if ( playerSelection == computerSelection ) return 'tie';
    return 'loose';
}

function game() {    
    for (let i = 0; i < 5; i++) {
        let playerS = playerSelection();
        let computerS = getComputerChoice();
        let result = playRound(playerS, computerS);
        if (result == 'tie') {
            console.log(result);
            i--;
            continue;
        } else console.log(result);
    }
}

game();