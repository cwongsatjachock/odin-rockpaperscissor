let playerSelection, 
    result,
    playerScore = 0,
    comScore = 0; 

function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

function playRound( playerSelection, computerSelection ) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == 'rock' && computerSelection == 'scissor' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissor' && computerSelection == 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if ( playerSelection == computerSelection )
    {
        return `You Tie! ${playerSelection} equals ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Please enter your choice of rock, paper, or scissor: ", "");
    result = playRound(playerSelection, computerPlay());
    console.log(result);
    console.log(result.charAt(4));
    switch(result.charAt(4)) {
        case 'W':
            playerScore += 1;
            break;
        case 'L':
            comScore += 1;
            break;
    }

    if(i == 4){
        if (playerScore > comScore) {
            console.log('Player Win!');
        } else if (comScore > playerScore) {
            console.log('Computer Win!');
        } else {
            console.log('Tie!')
        }
    }
}

