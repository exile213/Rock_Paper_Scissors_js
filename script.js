let PlayerScore= 0;
let CompScore=0;

function game(){
        //Variable Section ----------------------------------------------------------------
    
        let playerSelection =""; 
        let computerSelection = randComputerChoice();
        const plScoreDisplay = document.getElementById("playerScore");
        const cpuScoreDisplay = document.getElementById("computerScore");
        const msgDisplay = document.getElementById("message");

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

        /*Add score to play Function */
        function AddPlayerScore(){
            PlayerScore = PlayerScore+1;
        }

        /*Add score to play Function */
        function AddCompScore(){
            CompScore = CompScore+1;
        }
        
        /*Add resets UI and randomized computer choice again Function */
        function resets(){
            compChose.className = "computerChose";
            plChose.className = "playerChose"
            playerSelection = "";
            computerSelection= randComputerChoice();
        };

        /*Reflects score on UI Function*/
        function UpdateScore(){
            cpuScoreDisplay.textContent=CompScore;
            plScoreDisplay.textContent=PlayerScore;
        }

        /*Disables buttons for a bit after clicking battle function */
        function Disables(){
            battleBtn.disabled = true;
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;

            setTimeout(function(){
                battleBtn.disabled = false;
                rockBtn.disabled = false;
                paperBtn.disabled = false;
                scissorsBtn.disabled = false;
    
            },2000)

        }


        /*Shows message on screen function */
        function showMessage(roundCase){

            switch (roundCase){
                case 0:
                    msgDisplay.textContent ="You Win! Rock beats Scissors";
                    break;
                case 1:
                    msgDisplay.textContent ="You Win! Paper beats Rock";
                    break;  
                case 2:
                    msgDisplay.textContent ="You Win! Scissors beats Paper";
                    break;
                case 3:
                    msgDisplay.textContent ="You lose! Paper beats Rock";
                    break;    
                case 4:
                    msgDisplay.textContent ="You lose! Scissors beats Paper";
                    break;
                case 5:
                    msgDisplay.textContent ="You lose! Rock beats Scissors";
                    break;    
                case 6:
                    msgDisplay.textContent ="You tie with the Computer!";
                    break;      
                case 7:
                    msgDisplay.textContent ="Please Pick a Weapon!";
                    break;      

            }

            setTimeout(function(){
                msgDisplay.textContent="";
            },2000);
        }


        //Player clicks battle button, calls round start function
        battleBtn.addEventListener("click",function() {
                playRound(playerSelection, computerSelection);
        })

        //Round Start Function
        function playRound(playerSelection, computerSelection) {


            //Disables button functionality for 2 seconds
            Disables();

            //Checks If player has chosen a weapon, it proceeds
            if(playerSelection != ""){


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


                // Player doesnt choose anything                                    
                if(playerSelection === ""){
                    showMessage(7);
                    setTimeout(function() {resets();}, 2000);
                }


                // Player wins
                if(playerSelection === "rock" &&  computerSelection === "scissors"){
                    AddPlayerScore();
                    UpdateScore();
                    showMessage(0);
                    setTimeout(function() {resets();}, 2000);
            
                }
                else if(playerSelection === "paper" &&  computerSelection === "rock"){
                    AddPlayerScore();
                    UpdateScore();
                    showMessage(1);
                    setTimeout(function() {resets();}, 2000);
                }
                else if(playerSelection === "scissors" &&  computerSelection === "paper"){
                    AddPlayerScore();
                    UpdateScore();
                    showMessage(2);
                    setTimeout(function() {resets();}, 2000);
                }
                
                //computer wins
                if(playerSelection === "rock" &&  computerSelection === "paper"){
                    AddCompScore();
                    UpdateScore();
                    showMessage(3);
                    setTimeout(function() {resets();}, 2000);
                }
                else if(playerSelection === "paper" &&  computerSelection === "scissors"){
                    AddCompScore();
                    UpdateScore();
                    showMessage(4);
                    setTimeout(function() {resets();}, 2000);
                }
                else if(playerSelection === "scissors" &&  computerSelection === "rock"){
                    AddCompScore();
                    UpdateScore();
                    showMessage(5);
                    setTimeout(function() {resets();}, 2000);
                }
        
                //tie
                else if(playerSelection === computerSelection){
                    showMessage(6);
                    setTimeout(function() {resets();}, 2000);
                }

            }
            
            //If player has not chosen a weapon, display message
            else if(playerSelection === ""){
                msgDisplay.textContent ="Please Choose a weapon!";
                setTimeout(function(){
                    msgDisplay.textContent ="";
                },2000)
            }
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