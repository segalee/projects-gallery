var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
const KEY = 'questsDB';

function createQuestsTree() {
    _loadQuestionsFromStorage();
    if (!gQuestsTree) {
        gQuestsTree = createQuest('Female?');
        gQuestsTree.yes = createQuest('Queen');
        gQuestsTree.no = createQuest('Painter?');
        gQuestsTree.yes.yes = createQuest('Cleopatra');
        gQuestsTree.yes.no = createQuest('Rita');
        gQuestsTree.no.yes = createQuest('Picasso');
        gQuestsTree.no.no = createQuest('Gandhi');
        // gQuestsTree.yes = createQuest('Gandhi');
        // gQuestsTree.no = createQuest('Rita');
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
        _saveQuestionsToStorage();
    }
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null,
    };
}

function isChildless(node) {
    return node.yes === null && node.no === null;
}

function moveToNextQuest(res) {
    //update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // Create and Connect the 2 Quests to the questions tree
    var newQuest = createQuest(newQuestTxt);
    newQuest.yes = createQuest(newGuessTxt);
    newQuest.no = gCurrQuest;
    gCurrQuest = gQuestsTree;
    gPrevQuest[lastRes] = newQuest;
    _saveQuestionsToStorage();
}

function getCurrQuest() {
    return gCurrQuest;
}

function _saveQuestionsToStorage() {
    saveToStorage(KEY, gQuestsTree);
}

function _loadQuestionsFromStorage() {
    loadFromStorage(KEY);
}