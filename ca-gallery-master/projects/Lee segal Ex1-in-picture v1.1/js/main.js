'use strict';
var gNextId = 1;
var gQuests;
var gCurrQuestIdx = 0;
var gIsGameOver;
var gElModal = document.querySelector('.modal');
var gElBoard = document.querySelector('.game-board');

function init() {
    gElModal.style.display = 'none';
    var elRstBtn = document.querySelector('.rst-btn');
    elRstBtn.style.display = 'none';
    !gIsGameOver;
    createQuests();
    renderQuests(0);
    console.log('gQuests:', gQuests);
}

function start() {
    setTimeout(init, 1000);
    // gElModal.style.display = 'none';
}

function resetBtn(elRstBtn) {
    if (!gIsGameOver) {
        init();
        elRstBtn.innerText = 'Play';
        elRstBtn.style.display = 'none';
    } else {
        elRstBtn.innerText = 'Restart';
        gCurrQuestIdx = 0;
        init();
        elRstBtn.innerText = 'Play';
        elRstBtn.style.display = 'none';
    }
}

function checkAnswer(optIdx, elClickedAnswer) {
    var currOpt = gQuests[gCurrQuestIdx];
    if (optIdx === currOpt.correctOptIndex) {
        elClickedAnswer.classList.add('correct');
        gCurrQuestIdx++;
        if (gCurrQuestIdx < gQuests.length) renderQuests();
    } else if (optIdx !== currOpt.correctOptIndex) {
        elClickedAnswer.classList.add('wrong');
        setTimeout(() => {
            gCurrQuestIdx;
        }, 500);
    }

    if (gCurrQuestIdx === gQuests.length) {
        gElBoard.style.display = 'none';
        setTimeout(() => {
            gElBoard.style.display = 'block';
        }, 1000);
        openModal();
        var modalMsg = setTimeout(() => {
            closeModal();
        }, 1000);
        // gElBoard.style.display = 'block';
        var elRstBtn = document.querySelector('.rst-btn');
        elRstBtn.style.display = 'block';
        elRstBtn.innerText = 'Restart';
        gIsGameOver = true;
    }
}

function renderQuests(currQuestIdx) {
    currQuestIdx = gCurrQuestIdx;
    var currQuest = gQuests[currQuestIdx];
    var strHTML = '';
    for (var i = 0; i < currQuest.opts.length; i++) {
        var currOpt = currQuest.opts[i];
        strHTML += `<div onClick="checkAnswer(${i}, this)" class="opt opt${
      currQuestIdx + 1
    }">${currOpt}</div>`;
    }
    var elOpts = document.querySelector('.options');
    elOpts.innerHTML = strHTML;
    var elImg = document.querySelector('.quest-img');
    elImg.src = `img/${currQuestIdx + 1}.jpg`;
}

function createQuests() {
    return (gQuests = [{
            id: gNextId++,
            opts: [`I say "woof!"`, `I say "meow!"`],
            correctOptIndex: 0,
        },
        {
            id: gNextId++,
            opts: [`I have a long tail`, `I'm soft and furry`],
            correctOptIndex: 1,
        },
        {
            id: gNextId++,
            opts: ['I can fly', 'I can swim'],
            correctOptIndex: 1,
        },
    ]);
}

function openModal() {
    gElModal.style.display = 'block';
}

function closeModal() {
    gElModal.style.display = 'none';
    // clearTimeout(modalMsg);
}