const choices = ["rock", "paper", "scissors"]

function game(){
    const games = 5;  
    let playerPoints = 0; 
    let computerPoints = 0;

    for(let i = 0; i < games; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase(); 
        function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
        let computerSelection = computerPlay();

        let round = playRound(playerSelection, computerSelection);
        if(round === "wins"){
            playerPoints++;
            console.log("You Win");
        } else if(round === "loses"){
            computerPoints++;
            console.log("You Lose");
        } else if(round === "ties") {
            console.log("tied");
        } 
    }
    if(playerPoints > computerPoints){
        console.log('');
        console.log("Congratulations!  You beat the computer " + playerPoints + " to " + computerPoints);
    } else {
        console.log("Sorry!  You lost to the computer " + computerPoints + " to " + playerPoints);
    }
}

function playRound(playerSelection, computerSelection){  
    if (playerSelection === 'rock' && playerSelection === choices[0]) {
        if (computerSelection ==='scissors') {
            return 'wins';
        } else if (computerSelection === 'paper') {
            return 'loses';
        } else {
            return 'ties';
        }
    } else {
        prompt ('Wrong choice! Try again')
    }
    if (playerSelection === 'paper' && playerSelection === choices[1]) {
        if (computerSelection === 'rock') {
            return 'wins';
        } else if (computerSelection === 'scissors') {
            return 'loses';
        } else {
            return 'ties';
        } 
    } else {
        prompt ('Wrong choice! Try again')
    }
    if (playerSelection === 'scissors' && playerSelection === choices[2]) {
        if (computerSelection === 'rock') {
            return 'loses';
        } else if (computerSelection === 'paper') {
            return 'wins';
        } else {
            return 'ties';
        } 
    } else {
        prompt ('Wrong choice! Try again')
    }
}

game();