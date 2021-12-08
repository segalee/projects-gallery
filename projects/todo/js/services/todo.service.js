'use strict';

var gTodos;
_createTodos();

var gFilterBy = 'ALL';
var gSortBy = 'TXT';

function getTodosForDisplay() {
    if (gFilterBy === 'ALL') return gTodos;
    const todos = gTodos.filter(
        (todo) =>
        (todo.isDone && gFilterBy === 'DONE') ||
        (!todo.isDone && gFilterBy === 'ACTIVE')
    );
    return todos;
}

function getTotalCount() {
    return gTodos.length;
}

function getActiveCount() {
    const todos = gTodos.filter((todo) => !todo.isDone);
    return todos.length;
}

function setFilter(filterBy) {
    gFilterBy = filterBy;
}

function setSort(sortBy) {
    gSortBy = sortBy;
    if (sortBy === 'TXT') {
        gTodos.sort((a, b) => {
            var textA = a.txt.toUpperCase();
            var textB = b.txt.toUpperCase();
            if (textA < textB) {
                return -1;
            }
            if (textA > textB) {
                return 1;
            }
            return 0;
        });
    } else if (sortBy === 'CREATED') {
        gTodos.sort((a, b) => {
            return a.createdAt - b.createdAt;
        });
    } else if (sortBy === 'IMPORTANCE') {
        gTodos.sort((a, b) => {
            return a.importance - b.importance;
        });
    }
    renderTodos();
}

function toggleTodo(todoId) {
    const todo = gTodos.find((todo) => todo.id === todoId);
    todo.isDone = !todo.isDone;
    _saveTodosToStorage();
}

function removeTodo(todoId) {
    const idx = gTodos.findIndex((todo) => todo.id === todoId);
    gTodos.splice(idx, 1);
    _saveTodosToStorage();
}

function addTodo(txt, imp) {
    const todo = _createTodo(txt, imp);
    gTodos.unshift(todo);
    _saveTodosToStorage();
}

// Those are "private" functions meant to be used ONLY by the service itself
function _createTodo(txt, imp) {
    const todo = {
        id: _makeId(),
        txt: txt,
        isDone: false,
        createdAt: new Date(),
        importance: imp,
    };
    return todo;
}

function _makeId(length = 5) {
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _saveTodosToStorage() {
    saveToStorage('todoDB', gTodos);
}

function _createTodos() {
    var todos = loadFromStorage('todoDB');
    if (!todos || todos.length === 0) {
        todos = [
            _createTodo('Learn JS', 1),
            _createTodo('Master CSS', 3),
            _createTodo('Study HTML', 2),
        ];
    }
    gTodos = todos;
    _saveTodosToStorage();
}