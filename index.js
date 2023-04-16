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
    if (random < 0.1741930477963997) {
        diceOne = 1;
    } else if (random < 0.3446927374301676) {
        diceOne = 2;
    } else if (random < 0.5182184978274363) {
        diceOne = 3;
    } else if (random < 0.690068280571073) {
        diceOne = 4;
    } else if (random < 0.8594196151458721) {
        diceOne = 5;
    } else {
        diceOne= 6;
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
