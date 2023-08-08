

function game(){
    for(var rounds=1;rounds<=5;rounds++){
        let playerSelection = prompt("ROCK PAPER SCISSORS\n Round:"+ rounds + " \n Enter your Choice(rock, paper, Scissors): ").toLowerCase();
        let computerSelection = getComputerChoice();
        
        
        function getComputerChoice(compChoice){
            const compChoices = ["rock", "paper", "scissors"];
            const compRand = Math.floor(Math.random() * 3);
    
            return compChoices[compRand];
        }
        
        function playRound(playerSelection, computerSelection) {
    
            // Player wins
            if(playerSelection === "rock" &&  computerSelection === "scissors"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                return "You Win! Rock beats Scissors";
            }
            else if(playerSelection === "paper" &&  computerSelection === "rock"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                return "You Win! Paper beats Rock";
            }
            else if(playerSelection === "scissors" &&  computerSelection === "paper"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                return "You Win! Scissors beats Paper";
            }
            
            //computer wins
            else if(playerSelection === "rock" &&  computerSelection === "paper"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                return "You lose! Paper beats Rock";
            }
            else if(playerSelection === "paper" &&  computerSelection === "scissors"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                return "You lose! Scissors beats Paper";
            }
            else if(playerSelection === "scissors" &&  computerSelection === "rock"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                return "You lose! Rock beats Scissors";
            }
    
            //tie
            else{
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                return "You tie with the Computer!";
            }
        }
           
        console.log(playRound(playerSelection, computerSelection));
    
    }
}

game();