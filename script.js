var playerScore = 0;
var computerScore = 0;
let round = 0;

/*Function that runs the game*/
function game() {
        getComputerChoice(); /*run this to generate a new random value at the beginning of each loop*/
        playRound();
        addToBoard();
        chickenDinner();
    }

    var sboard = document.getElementById('board');
    var butts = document.getElementById('butts');

function addToBoard(){
    const scoreBoard = document.createElement('h2');
    scoreBoard.classList.add('scoreBoard');
    sboard.innerHTML="";
    if (computerScore == 5) {
        scoreBoard.textContent = "Game over, computer wins "+computerScore+" to "+playerScore+"! Press PLAY to try again";
    } else if (playerScore == 5) {
        scoreBoard.textContent = "Game over, player wins "+playerScore+" to "+computerScore+"! Press PLAY to try again";
    } else {
        scoreBoard.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
    }
        sboard.appendChild(scoreBoard);
}

function chickenDinner(){
    if(computerScore==5){
        //butts.innerHTML="";
        playGame.style.display = "initial";
        document.getElementById("rockButt").disabled = true;
        document.getElementById("papButt").disabled = true;
        document.getElementById("sciButt").disabled = true;
        document.getElementById("playGame").disabled = false;
    } else if(playerScore==5){
        //butts.innerHTML="";
        playGame.style.display = "initial";
        document.getElementById("rockButt").disabled = true;
        document.getElementById("papButt").disabled = true;
        document.getElementById("sciButt").disabled = true;  
        document.getElementById("playGame").disabled = false;      
    }
}

/*Random value generator*/
function getComputerChoice() {
    let decision = Math.floor(Math.random()*3);
    if (decision === 0) {
        return "Rock";
    } else if (decision === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
/*One round of rock paper scissors that evaluates player submitted value via popup window 
and adds to player or comp score based on who wins*/
function playRound() {
    let computerSelection = getComputerChoice();
    //let playerSelection = playerClick();
    if (playerSelection.toLowerCase()==='rock' && computerSelection==="Paper") {
        alert("You Lose! Paper beats Rock");
        computerScore++;
    } else if (playerSelection.toLowerCase()==='rock' && computerSelection==="Rock") {
        alert("It's a tie!");
        //playRound();
    } else if (playerSelection.toLowerCase()==='rock' && computerSelection==="Scissors") {
        alert("You Win! Rock beats Scissors");
        playerScore++;
    } else if (playerSelection.toLowerCase()==='paper' && computerSelection==="Paper") {
        alert("It's a tie!");
        //playRound();
    } else if (playerSelection.toLowerCase()==='paper' && computerSelection==="Rock") {
        alert("You Win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection.toLowerCase()==='paper' && computerSelection==="Scissors") {
        alert("You Lose! Scissors beat Paper");
        computerScore++;
    } else if (playerSelection.toLowerCase()==='scissors' && computerSelection==="Paper") {
        alert("You Win! Scissors beat Paper");
        playerScore++;
    } else if (playerSelection.toLowerCase()==='scissors' && computerSelection==="Rock") {
        alert("You Lose! Rock beats Scissors");
        computerScore++;
    } else if (playerSelection.toLowerCase()==='scissors' && computerSelection==="Scissors") {
        alert("It's a tie!");
        //playRound();
    } else {
        alert("Error: answer did not match 'rock', 'paper', or 'scissors'");
        //playRound();
    }
}

function rockClick(){
    playerSelection = "rock";
    game();
}

function paperClick(){
    playerSelection = "paper";
    game();
}

function scissorsClick(){
    playerSelection = "scissors";
    game();
}

const openGame = document.getElementById("playGame");
openGame.addEventListener("click", addButtons);

const board = document.querySelector('#board'); //not sure what the hell this is for

document.getElementById("rockButt").disabled = true;
document.getElementById("papButt").disabled = true;
document.getElementById("sciButt").disabled = true;

function addButtons() {
    rockButt.setAttribute("onClick","rockClick()");
    papButt.setAttribute("onClick","paperClick()");
    sciButt.setAttribute("onClick","scissorsClick()");
    document.getElementById("rockButt").disabled = false;
    document.getElementById("papButt").disabled = false;
    document.getElementById("sciButt").disabled = false;
    document.getElementById("playGame").disabled = true;    
    playerScore = 0; //resets player score
    computerScore = 0; //resets computer score
    sboard.innerHTML="";
    const scoreBoard = document.createElement('h2');
    scoreBoard.classList.add('scoreBoard');
    sboard.innerHTML="";    
    scoreBoard.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
    sboard.appendChild(scoreBoard);
    //playGame.style.display = "none";
}


const playNewRound = document.getElementById("playGame");
openGame.addEventListener("click", addButtons);