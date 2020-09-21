var highestNum, randomNum, trys = 0;
var highestNumField = document.getElementById("highest");
var startBtn = document.getElementById("start");
var playerNum = document.getElementById("playerNum");
var checkBtn = document.getElementById("check");
var result = document.getElementById("resultText");
var playerTrys = document.getElementById("trys");
var tryText = document.getElementById("tryText");

highestNumField.addEventListener("keyup", getMaxNum);
highestNumField.addEventListener("click", getMaxNum);
playerTrys.addEventListener("keyup", getMaxNum);
playerTrys.addEventListener("click", getMaxNum);
startBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkNums);

highestNum = parseInt(highestNumField.value);
trys = parseInt(playerTrys.value);
tryText.innerHTML = "You have " + trys + " tries";
endGame();

function getMaxNum() {
    if (parseInt(highestNumField.value) < 5) {
        highestNumField.value = "5";
    }
    if (parseInt(playerTrys.value) < 1) {
        playerTrys.value = "1";
    }

}

function startGame() {
    randomNum = Math.ceil(Math.random() * highestNum);
    highestNum = parseInt(highestNumField.value);
    trys = parseInt(playerTrys.value);
    tryText.innerHTML = "You have " + trys + " tries";
    highestNumField.disabled = true;
    playerNum.disabled = false;
    checkBtn.disabled = false;
    startBtn.disabled = true;
    playerTrys.disabled = true;
}

function checkNums() {
    let playerInput = parseInt(playerNum.value);
    if (playerInput == randomNum) {
        result.innerHTML = "Gewonnen!";
        endGame();
    }
    else if (playerInput > randomNum) {
        result.innerHTML = "kleiner";
    }
    else if (playerInput < randomNum) {
        result.innerHTML = "größer";
    }

    trys--;
    tryText.innerHTML = "You have " + trys + " tries";
    if (trys == 0) {
        result.innerHTML = "Verloren!";
        endGame();
    }
}

function endGame() {
    highestNumField.disabled = false;
    playerNum.disabled = true;
    checkBtn.disabled = true;
    startBtn.disabled = false;
    playerTrys.disabled = false;
}