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
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return 'You Tie! Rock equals Rock';
                case 'paper':
                    return 'You Lose! Paper beats Rock';
                case 'scissor':
                    return 'You Win! Rock beats Scissor';
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return 'You Win! Paper beats Rock';
                case 'paper':
                    return 'You Tie! Paper equals Paper';
                case 'scissor':
                    return 'You Lose! Scissor beats Paper';
            }
        case 'scissor':
            switch (computerSelection) {
                case 'rock':
                    return 'You Lose! Rock beats Scissor';
                case 'paper':
                    return 'You Win! Scissor beats Paper';
                case 'scissor':
                    return 'You Tie! Scissor equals Scissor';
            }
    }
}
