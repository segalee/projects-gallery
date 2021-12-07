var gNums = [1, 2, 3, 4, 5, 6, 7];
shuffle(gNums);
var num = drawNum();
num = drawNum();

function drawNum() {
    return gNums.pop();
}

function shuffle(items) {
    var randIdx, keep;
    for (var i = items.length - 1; i > 0; i--) {
        // randIdx = getRandomInt(0, items.length);
        randIdx = getRandomInt(0, i + 1);

        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;
}

///////////////////////////////////////////////////////////////////////////////

var gNums2 = [1, 2, 3, 4, 5, 6, 7];
// console.log('gNums2', gNums2)

var num = drawNum2();
// console.log('num', num)
// console.log('gNums2', gNums2)

num = drawNum2();
// console.log('num', num)
// console.log('gNums2', gNums2)

function drawNum2() {
    var idx = getRandomInt(0, gNums2.length);
    var num = gNums2[idx];
    gNums2.splice(idx, 1);
    return num;
}

/////////////////////////////////////////////////////////////////////////////////

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// var count = 0
// var intervalId = setInterval(function(){
//     count++
//     if (count >= 10) {
//         clearInterval(intervalId)
//     }
//     console.log('timeout' + count);
// }, 500)

// console.log('res:', res);

function createMat(ROWS, COLS) {
    var mat = [];
    for (var i = 0; i < ROWS; i++) {
        var row = [];
        for (var j = 0; j < COLS; j++) {
            row.push('');
        }
        mat.push(row);
    }
    return mat;
}

function getRandomColor() {
    var h = getRandomInt(0, 360);
    var s = getRandomInt(42, 98);
    var l = getRandomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
}

function getRandomColor2() {
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