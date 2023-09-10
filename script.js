let PlayerScore= 0;
let CompScore=0;

function game(){

        let playerSelection;  //prompt("ROCK PAPER SCISSORS\n Round:"+ rounds + " \n Enter your Choice(rock, paper, scissors): ").toLowerCase();
        let computerSelection = getComputerChoice();

        //PLAYER CHOICE BUTTONS
        const plRock =document.getElementById("Rock");
        const plPaper =document.getElementById("Paper");
        const plScissors =document.getElementById("Scissors");
        const start =document.getElementById("start");

        //Player Clicks Choice Buttons events
        plRock.addEventListener("click", plSelectRock);
        plPaper.addEventListener("click", plSelectPaper);
        plScissors.addEventListener("click", plSelectScissors);

        

        //FUNCTIONS SECTION ----------------------------------------------------------------
        
        //Player Selects Rock Function
        function plSelectRock(){

        }

        //Player Selects Paper Function
        function plSelectPaper(){

        }

        //Player Selects Rock Function
        function  plSelectScissors(){

        }



        //Computer Randomizer Function
        function getComputerChoice(){
            const compChoices = ["rock", "paper", "scissors"];
            const compRand = Math.floor(Math.random() * 3);
    
            return compChoices[compRand];
        }


        //Round Start Function
        function playRound(playerSelection, computerSelection) {


            // Player wins
            if(playerSelection === "rock" &&  computerSelection === "scissors"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                AddPlayerScore();
                return "You Win! Rock beats Scissors";
            }
            else if(playerSelection === "paper" &&  computerSelection === "rock"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                AddPlayerScore();
                return "You Win! Paper beats Rock";
            }
            else if(playerSelection === "scissors" &&  computerSelection === "paper"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                AddPlayerScore();
                return "You Win! Scissors beats Paper";
            }
            
            //computer wins
            else if(playerSelection === "rock" &&  computerSelection === "paper"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                AddCompScore();
                return "You lose! Paper beats Rock";
            }
            else if(playerSelection === "paper" &&  computerSelection === "scissors"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                AddCompScore();
                return "You lose! Scissors beats Paper";
            }
            else if(playerSelection === "scissors" &&  computerSelection === "rock"){
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                AddCompScore();
                return "You lose! Rock beats Scissors";
            }
    
            //tie
            else{
                console.log("Player: " + playerSelection + "  Computer: " + computerSelection );
                return "You tie with the Computer!";
            }
        }
           
        function AddPlayerScore(){
            PlayerScore = PlayerScore+1;
        }

        function AddCompScore(){
            CompScore = CompScore+1;
        }
        
        console.log(playRound(playerSelection, computerSelection));
    
    }
    console.log("Total Player Score: " + PlayerScore );
    console.log("Total Computer Score: " + CompScore );


    if(PlayerScore > CompScore){
        console.log("You win the Game!")
    }
    else if(PlayerScore < CompScore){
        console.log("You lost the Game!")
    }
    else{
        console.log("You tie with the Computer")
    }
game();