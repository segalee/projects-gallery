function printMat(mat, selector) {
    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < mat.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < mat[0].length; j++) {
            var cell = mat[i][j];
            var className = 'cell cell' + i + '-' + j;
            strHTML += '<td class="' + className + '"> ' + cell + ' </td>';
        }
        strHTML += '</tr>';
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
    elCell.innerHTML = value;
}

function getRandomIntInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

function getRandomColor() {
    var green = 'rgb(83, 190, 83)';
    var red = 'rgb(218, 63, 76)';
    var blue = 'rgb(55, 182, 214)';
    var yellow = 'rgb(223, 202, 86)';
    var orange = 'rgb(240, 178, 62)';
    var niceColors = [green, red, blue, yellow, orange];
    var drawnNum = getRandomIntInt(0, niceColors.length);
    var randColor = niceColors[drawnNum];
    return randColor;
}

function removeGhost(location) {
    for (var i = 0; i < gGhosts.length; i++) {
        var ghost = gGhosts[i];
        if (location.i === ghost.location.i && location.j === ghost.location.j) {
            var removedGhost = gGhosts.splice(i, 1)[0];
        }
    }
    return removedGhost;
}