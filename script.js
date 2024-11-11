var resetGameBtn = document.getElementById('reset-game-btn');
var playerScore = 0;
var playerScoreText = document.getElementById('player-score');
var computerScore = 0;
var computerScoreText = document.getElementById('computer-score');
var resultText = document.getElementById('result-text');
var playerChoiceImage = document.getElementById('player-choice-img');
var computerChoiceImage = document.getElementById('computer-choice-img');
let randomNumber; // 0 = rock, 1 = paper, 2 = scissors


function rockSelected() {
    randomNumber = Math.floor(Math.random() * 3);
    playerChoiceImage.src="rock.png";
    activateResetGameBtn();

    switch(randomNumber) {
        case 0:
            computerChoiceImage.src="rock.png";
            tie();
            break;
        case 1:
            computerChoiceImage.src="paper.png";
            computerWin();
            break;
        case 2:
            computerChoiceImage.src="scissors.png";
            playerWin();
            break;
        default:
            console.log("Something went wrong generating the random number");
            break;
    }
}

function paperSelected() {
    randomNumber = Math.floor(Math.random() * 3);
    playerChoiceImage.src="paper.png";
    activateResetGameBtn();

    switch(randomNumber) {
        case 0:
            computerChoiceImage.src="rock.png";
            playerWin();
            break;
        case 1:
            computerChoiceImage.src="paper.png";
            tie();
            break;
        case 2:
            computerChoiceImage.src="scissors.png";
            computerWin();
            break;
        default:
            console.log("Something went wrong generating the random number");
            break;
    }
}

function scissorsSelected() {
    randomNumber = Math.floor(Math.random() * 3);
    playerChoiceImage.src="scissors.png";
    activateResetGameBtn();

    switch(randomNumber) {
        case 0:
            computerChoiceImage.src="rock.png";
            computerWin();
            break;
        case 1:
            computerChoiceImage.src="paper.png";
            playerWin();
            break;
        case 2:
            computerChoiceImage.src="scissors.png";
            tie();
            break;
        default:
            console.log("Something went wrong generating the random number");
            break;
    }
}


function tie() {
    resultText.textContent = ("Tie");
}
function computerWin() {
    resultText.textContent = ("Computer won");
    computerScore++;
    computerScoreText.textContent = computerScore;
}
function playerWin() {
    resultText.textContent = ("Player won");
    playerScore++;
    playerScoreText.innerText = playerScore;
}

function resetGame() {
    resultText.innerText = "";
    playerScore = 0;
    playerScoreText.innerText = 0;
    computerScore = 0;
    computerScoreText.innerText = 0;
    playerChoiceImage.src="";
    computerChoiceImage.src="";
    resetGameBtn.style.display = "none";
}

function activateResetGameBtn() {
    resetGameBtn.style.display = "block";
}
