let PlayerScore= 0;
let CompScore=0;

function game(){
        //Variable Section ----------------------------------------------------------------
        /*
        let playerSelection; 
        let computerSelection = getComputerChoice();
        */

        //PLAYER CHOICE BUTTONS Variables
        const rockBtn = document.getElementById("Rock");
        const paperBtn =document.getElementById("Paper");
        const scissorsBtn =document.getElementById("Scissors");


        //Player Selected Choice variable
        let plChose= document.getElementById("playerChose");



        //Player Clicks Choice Buttons events
        rockBtn.addEventListener("click", plSelectRock);
        paperBtn.addEventListener("click", plSelectPaper);
        scissorsBtn.addEventListener("click", plSelectScissors);

        

        //FUNCTIONS SECTION ----------------------------------------------------------------
        
        //Player Selects Rock Function
        function plSelectRock(){
            plChose.className="playerChoseRock";
            console.log(plChose);
        }

        //Player Selects Paper Function
        function plSelectPaper(){
            plChose.className="playerChosePaper";
        }

        //Player Selects Rock Function
        function  plSelectScissors(){
            plChose.className="playerChoseScissors";
        }



        //Computer Randomizer Function
        function getComputerChoice(){
            const compChoices = ["rock", "paper", "scissors"];
            const compRand = Math.floor(Math.random() * 3);
    
            return compChoices[compRand];
        }

/*
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
    */
    }

    /*
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
    */
game();