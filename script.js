let playerScore = 0;
let computerScore = 0;
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
    const scoreBoard = document.createElement('div');
    scoreBoard.classList.add('scoreBoard');
    sboard.innerHTML="";
    scoreBoard.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
    sboard.appendChild(scoreBoard);
}

function chickenDinner(){
    if(computerScore==5){
        alert("Game over, computer wins "+computerScore+" to "+playerScore+"!");
    } else if(playerScore==5){
        alert("Game over, player wins "+playerScore+" to "+computerScore+"!");
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


/*Doesn't do anything right now but I want to reset scores after game loop ends*/
function reset() {
    let playerScore = 0;
    let computerScore = 0;
}
const openGame = document.getElementById("playGame");
openGame.addEventListener("click", addButtons);

const board = document.querySelector('#board'); //not sure what the hell this is for

function addButtons() {
    var rockButt = document.createElement("button");
    var rockText = document.createTextNode("Rock!");
    rockButt.setAttribute("id", "rockButt");
    rockButt.setAttribute("onClick","rockClick()");
    rockButt.appendChild(rockText);
    butts.appendChild(rockButt);
    var papButt = document.createElement("button");
    var papText = document.createTextNode("Paper!");
    papButt.setAttribute("id", "papButt");
    papButt.setAttribute("onClick","paperClick()");
    papButt.appendChild(papText);
    butts.appendChild(papButt);
    var sciButt = document.createElement("button");
    var sciText = document.createTextNode("Scissors!");
    sciButt.setAttribute("id", "sciButt");
    sciButt.setAttribute("onClick","scissorsClick()");
    sciButt.appendChild(sciText);
    butts.appendChild(sciButt);
}


const playNewRound = document.getElementById("playGame");
openGame.addEventListener("click", addButtons);