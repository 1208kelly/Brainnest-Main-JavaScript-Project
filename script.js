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
}