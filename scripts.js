function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
    }
}

console.log(computerPlay());