'use strict';
const WALL = '🚧';
const FOOD = '.';
const EMPTY = ' ';
const SUPER = '🍔';

var gRemovedGhosts = [];
var gBoard;
var gCountTotalFood;
var gGame = {
    score: 0,
    isOn: false,
};

function toggleModal(display, msg) {
    var elModal = document.querySelector('.modal');
    elModal.style.display = display;
    var elModalH3 = document.querySelector('.modal h3');
    elModalH3.innerText = msg;
}

// function countTotalFoodAmount() {
//     var wallsCounter = 0;
//     gCountTotalFood = 0;
//     for (var i = 0; i < gBoard.length; i++) {
//         for (let j = 0; j < gBoard[0].length; j++) {
//             var currCell = gBoard[i][j];
//             if (currCell !== WALL && currCell !== PACMAN && currCell !== SUPER) {
//                 gCountTotalFood++;
//             }
//         }
//     }
//     console.log('wallsCounter:', wallsCounter);
//     console.log('gCountTotalFood:', gCountTotalFood);

//     return gCountTotalFood;
// }

function init() {
    toggleModal('none');
    console.log('hello');
    gBoard = buildBoard();
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container');
    gGame.isOn = true;
    console.log('gCountTotalFood:', gCountTotalFood);
    gRemovedGhosts = [];
    // countTotalFoodAmount();
}

function restartBtn(elRstBtn) {
    var elRst = document.querySelector('.rst');
    elRst.innerText = '0';
    gGame.score = 0;
    init();
}

function buildBoard() {
    gCountTotalFood = 0;
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            gCountTotalFood++;
            board[i][j] = FOOD;
            if (
                i === 0 ||
                i === SIZE - 1 ||
                j === 0 ||
                j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)
            ) {
                board[i][j] = WALL;
                gCountTotalFood--;
            }
            // if (board[i][j] === PACMAN) gCountTotalFood--;

            if (
                (i === 1 && j === 1) ||
                (i === 1 && j === SIZE - 2) ||
                (i === SIZE - 2 && j === 1) ||
                (i === SIZE - 2 && j === SIZE - 2)
            ) {
                board[i][j] = SUPER;
            }
        }
    }
    return board;
}

function updateScore(diff) {
    gGame.score += diff;
    document.querySelector('h2 span').innerText = gGame.score;
    console.log('gGame.score:', gGame.score);
}

function gameOver() {
    console.log('Game Over');
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
    toggleModal('block', 'YOU LOST');
}