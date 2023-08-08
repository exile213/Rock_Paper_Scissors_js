
function game(){
    const playerSelection = prompt("Enter your Choice: ").toLowerCase();
    const computerSelection = getComputerChoice();
    
    
    function getComputerChoice(compChoice){
        const compChoices = ["rock", "paper", "scissors"];
        const compRand = Math.floor(Math.random() * 3);

        return compChoices[compRand];
    }
    
    function playRound(playerSelection, computerSelection) {
        // your code here!
    
    }
       


   // console.log(playRound(playerSelection, computerSelection));

}
