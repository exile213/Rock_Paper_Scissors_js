
function game(){
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    
    
    function getComputerChoice(compChoice){
        const compChoices = ["rock", "paper", "scissors"];
        const compRand = Math.floor(Math.random() * 3);

        console.log(compChoices[compRand]);
    }
    
    function playRound(playerSelection, computerSelection) {
        // your code here!
    }
       


   // console.log(playRound(playerSelection, computerSelection));

}
