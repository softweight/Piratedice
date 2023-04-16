var elDiceOne = document.getElementById('dice1');
var elComeOut = document.getElementById('roll');
const historyDiv = document.getElementById('his');
const clearHistoryButton = document.getElementById('clear-btn').querySelector('button');


const history = [];
const map = {
    5: 2,
    6: 3,
    4: 5,
    3: 4,
    1: 1,
    2: 6
};

elComeOut.onclick = function () {rollDice()};
clearHistoryButton.onclick = function () {clearHistory()};

function rollDice() {
    // console.log("start!")
    var diceOne;
    const random = Math.random();
    if (random < 0.1806) {
        diceOne = 3;
    } else if (random < 0.3473) {
        diceOne = 2;
    } else if (random < 0.5169) {
        diceOne = 5;
    } else if (random < 0.6768) {
        diceOne = 4;
    } else if (random < 0.8159) {
        diceOne = 6;
    } else {
        diceOne= 1;
    }
    history.push(diceOne);
    console.log(diceOne);
    diceOne = map[diceOne]

    for (var i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }


    historyDiv.innerHTML = `歷史紀錄: ${history.join(', ')}`;
};

function clearHistory() {
    // clear the history array
    history.length = 0;
  
    // update the UI with the cleared history
    historyDiv.innerHTML = '歷史紀錄:';
  };
