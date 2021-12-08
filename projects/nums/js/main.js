'use strict';

var gNum = +prompt('choose level: 16/25/49');
var gNums = makeArrayOfNums(gNum);
var gCellClicked = 1;
var gNumOfClicks = 0;
var gIsVictory = false;
var gStartTime;
var gIntervalDuration;
var intervalId;
var gElTable = document.querySelector('table');

function init() {
    renderTable(gNum);
    createStopper();
    gStartTime = Date.now();
}

function resetGame(elRstBtn) {
    // elRstBtn.style.display = 'block';
    var elIwinningDiv = document.querySelector('.is-winner');
    elIwinningDiv.style.display = 'none';
    elRstBtn.style.display = 'none';
    // var elh2Timer = document.querySelector('.display-timer');
    // elh2Timer.style.display = 'none';
    gCellClicked = 1;
    gNumOfClicks = 0;
    gIsVictory = false;
    gNum = +prompt('choose level: 16/25/49');
    gNums = makeArrayOfNums(gNum);
    gElTable.style.display = 'flex';
    // renderTable(gNum);
    // createStopper();
    // gStartTime = Date.now();

    init();
}

function createStopper() {
    var milliSeconds = 0;
    var seconds = 0;
    var minutes = 0;
    gIntervalDuration = 10;
    intervalId = setInterval(() => {
        var elH2Timer = document.querySelector('.display-timer');
        // CHANGE NUMS
        if (milliSeconds < 1000) {
            milliSeconds += gIntervalDuration;
        } else if (milliSeconds === 1000 && seconds !== 59) {
            milliSeconds = 0;
            seconds++;
        } else if (milliSeconds === 1000 && seconds === 59) {
            milliSeconds = 0;
            seconds = 0;
            minutes++;
        }
        // else if (milliSeconds === 1000 && seconds === 60) {
        //     milliSeconds = 0;
        //     seconds = 0;
        //     minutes++;
        // }
        // CHANGE ON SCREEN
        if (seconds < 10) {
            elH2Timer.innerText = `${minutes}:0${seconds}:${milliSeconds}`;
        } else if (seconds >= 10) {
            elH2Timer.innerText = `${minutes}:${seconds}:${milliSeconds}`;
        } else if (seconds === 59) {
            elH2Timer.innerText = `${minutes}:00:${milliSeconds}`;
        } else {
            elH2Timer.innerText = `${minutes}:${seconds}:${milliSeconds}`;
        }
    }, gIntervalDuration);
}

function isVictoryFunc() {
    if (gIsVictory) {
        clearInterval(intervalId);
        var totalTime = Date.now() - gStartTime;
        var elIwinningDiv = document.querySelector('.is-winner');
        elIwinningDiv.style.display = 'block';
        var elh2 = document.querySelector('h2');
        elh2.innerText = `Way To Go! It took you ${totalTime / 1000} seconds`;
        gElTable.style.display = 'none';
        document.querySelector('img').src = 'img/winner.gif';
        var elRstBtn = document.querySelector('.rst-btn');
        elRstBtn.style.display = 'block';
    }
}

function renderTable(num) {
    var table = [];
    var nums = gNums;
    var strHTML = '';
    var row = Math.sqrt(num);
    var counter = 0;
    for (var i = 0; i < row; i++) {
        table[i] = [];
        strHTML += '<tr>';
        for (var j = 0; j < row; j++) {
            table[i][j] = drawNum(nums);
            strHTML += `   
            <td  onclick="cellClicked(this,${table[i][j]})" data-i="${i}" data-j="${j}">${table[i][j]}</td>
            `;
            // console.log('gCounter:', counter);
        }
        strHTML += '</tr>';
    }
    var elTableBody = document.querySelector('.table-body');
    elTableBody.innerHTML = strHTML;
}

function cellClicked(elCell, cellNum) {
    // console.log('elCellIJ:', cellNum);
    if (gCellClicked === cellNum) {
        elCell.style.backgroundColor = getRandomColor();
        gCellClicked++;
        // elCell.classList.add('correct');
        if (cellNum === gNum) {
            gIsVictory = true;
            isVictoryFunc();
        }
    }
}

function makeArrayOfNums(num) {
    var array = [];
    for (var i = 1; i <= num; i++) {
        array.push(i);
    }
    return array;
}

function drawNum() {
    var idx = getRandomInt(0, gNums.length);
    var num = gNums[idx];
    gNums.splice(idx, 1);
    return num;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// function getRandomColor() {
//     var h = getRandomInt(0, 360);
//     var s = getRandomInt(42, 98);
//     var l = getRandomInt(40, 90);
//     return `hsl(${h},${s}%,${l}%)`;
// }

function getRandomColor() {
    var green = 'rgb(83, 190, 83)';
    var red = 'rgb(218, 63, 76)';
    var blue = 'rgb(55, 182, 214)';
    var yellow = 'rgb(223, 202, 86)';
    var orange = 'rgb(240, 178, 62)';
    var niceColors = [green, red, blue, yellow, orange];
    var drawnNum = getRandomInt(0, niceColors.length);
    var randColor = niceColors[drawnNum];
    return randColor;
}
// getRandomColor();

// function randomCellColor(elHoveredCell) {
//     elHoveredCell.style.backgroundColor = getRandomColor();
// }