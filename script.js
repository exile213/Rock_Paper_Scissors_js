
function game(){
    const playerSelection = prompt("Enter your Choice: ").toLowerCase();
    const computerSelection = getComputerChoice();
    
    
    function getComputerChoice(compChoice){
        const compChoices = ["rock", "paper", "scissors"];
        const compRand = Math.floor(Math.random() * 3);

        return compChoices[compRand];
    }
    
    function playRound(playerSelection, computerSelection) {

        // Player wins
        if(playerSelection === "rock" &&  computerSelection === "scissors"){
            return "You Win! Rock beats Scissors";
        }
        else if(playerSelection === "paper" &&  computerSelection === "rock"){
            return "You Win! Paper beats Rock";
        }
        else if(playerSelection === "scissors" &&  computerSelection === "paper"){
            return "You Win! Scissors beats Paper";
        }
        
        //computer wins
        else if(playerSelection === "rock" &&  computerSelection === "paper"){
            return "You lose! Paper beats Rock";
        }
        else if(playerSelection === "paper" &&  computerSelection === "scissors"){
            return "You lose! Scissors beats Paper";
        }
        else if(playerSelection === "scissors" &&  computerSelection === "rock"){
            return "You lose! Rock beats Scissors";
        }

        else{
            return "You tie with the Computer!";
        }
    }
       
    console.log(playRound(playerSelection, computerSelection));

}
