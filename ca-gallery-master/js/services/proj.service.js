'use strict';
var gProjs;

_createProjs();

function getProjs() {
    return gProjs;
}

function getProjById(projId) {
    var proj = gProjs.find(function(proj) {
        return projId === proj.id;
    });
    return proj;
}

function _createProj(
    name = 'Sokoban',
    title = 'Better push those boxes',
    url = 'img/portfolio/01-full.jpg',
    link = 'project/proj.html'
) {
    return {
        id: makeId(),
        name,
        title,
        desc: makeLorem(),
        url,
        publishedAt: 2021,
        labels: ['Matrixes', 'keyboard events'],
        link,
    };
}

function _createProjs() {
    var projs;
    if (!projs) {
        projs = [];
        const proj1 = _createProj(
            'Touch Nums',
            'Touch the Nums',
            'img/proj/touchnums.PNG',
            'projects/nums/index.html'
        );
        const proj2 = _createProj(
            'Mines Sweeper',
            'Watch those Mines',
            'img/proj/mines.PNG',
            'projects/minesweeper/index.html'
        );
        const proj3 = _createProj(
            'Pacman',
            'Watch those Mines',
            'img/proj/pacman.PNG',
            'projects/pacman/index.html'
        );
        const proj4 = _createProj(
            'Book Store',
            'Fun in the Library',
            'img/proj/bookstore.PNG',
            'projects/bookshop/index.html'
        );

        const proj5 = _createProj(
            'Guess Who',
            'Think of someone...',
            'img/proj/guess.PNG',
            'projects/guess/index.html'
        );

        const proj6 = _createProj(
            "What's in Picture",
            'Find The Differences',
            'img/proj/inpic.PNG',
            'projects/inpic/index.html'
        );

        // const proj5 = _createProj(
        //     'Guess Who',
        //     'What Do You Want todo Today?',
        //     'img/proj/guess.PNG',
        //     'projects/guess/index.html'
        // );

        projs.push(proj1, proj2, proj3, proj4, proj5, proj6);
    }
    gProjs = projs;
}

function makeId(length = 6) {
    var txt = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 20) {
    var words = [
        'The project',
        'above',
        'the colors',
        'was',
        'the color of functions',
        'tuned',
        'to',
        'a dead channel',
        '.',
        'All',
        'this happened',
        'more or less',
        '.',
        'I',
        'had',
        'the game',
        'bit by bit',
        'from various',
        'and',
        'as generally',
        'happens',
        'in such cases',
        'each time',
        'it',
        'was',
        'fun',
        '.',
        'It',
        'was',
        'a pleasure',
        'to',
        'create',
    ];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}