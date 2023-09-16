let PlayerScore= 0;
let CompScore=0;

function game(){
        //Variable Section ----------------------------------------------------------------
    
        let playerSelection; 
        let computerSelection = randComputerChoice();

        //PLAYER CHOICE BUTTONS Variables
        const rockBtn = document.getElementById("Rock");
        const paperBtn =document.getElementById("Paper");
        const scissorsBtn =document.getElementById("Scissors");
        const battleBtn = document.getElementById("Battle");

        //Player Selected Choice variable
        let plChose= document.getElementById("playerChose");
        let compChose = document.getElementById("computerChose");


        //Player Clicks Choice Buttons events
        rockBtn.addEventListener("click", plSelectRock);
        paperBtn.addEventListener("click", plSelectPaper);
        scissorsBtn.addEventListener("click", plSelectScissors);

        

        //FUNCTIONS SECTION ----------------------------------------------------------------
        
        //Player Selects Rock Function
        function plSelectRock(){
            plChose.className="playerChoseRock";
            playerSelection="rock";
        }

        //Player Selects Paper Function
        function plSelectPaper(){
            plChose.className="playerChosePaper";
            playerSelection="paper";
        }

        //Player Selects Rock Function
        function  plSelectScissors(){
            plChose.className="playerChoseScissors";
            playerSelection="scissors";
        }


        //Computer Randomizer Function
        function randComputerChoice(){
            const compChoices = ["rock", "paper", "scissors"];
            const compRand = Math.floor(Math.random() * 3);
            return compChoices[compRand];
        }




        //Player clicks battle button, calls round start function
        battleBtn.addEventListener("click",function() {
            playRound(playerSelection, computerSelection);
        })

        //Round Start Function
        function playRound(playerSelection, computerSelection) {

            //Shows what the Computer Chose in UI
                if(computerSelection === "scissors"){
                    compChose.className = "computerChoseScissors";
                }
                else if(computerSelection === "paper"){
                    compChose.className = "computerChosePaper";
                }
                else if(computerSelection === "rock"){
                    compChose.className = "computerChoseRock";
                }


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