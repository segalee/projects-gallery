'use strict';

function onInit() {
    renderTodos();
}

function renderTodos() {
    const todos = getTodosForDisplay();
    // console.log(todos);
    const strHTMLs = todos.map((todo) => {
        const className = todo.isDone ? 'done' : '';
        const strHTML = `<li class="${className}" onclick="onToggleTodo(this, '${todo.id}')">
            <span>${todo.txt}</span> <span>${todo.importance}</span> <span> Task was created at ${todo.createdAt}</span>
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
         </li>`;

        return strHTML;
    });
    document.querySelector('.todo-list').innerHTML = strHTMLs.join('');
    document.querySelector('.todo-total-count').innerText = getTotalCount();
    document.querySelector('.todo-active-count').innerText = getActiveCount();
    if (gTodos.length === 0) {
        document.querySelector('h2').innerHTML = 'No todos left! 😎';
    } else {
        document.querySelector('h2').innerHTML = '';
    }
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation();
    console.log('Removing..', todoId);
    var confirmMsg = confirm('Are you sure you want to delete?');
    if (confirmMsg) {
        removeTodo(todoId);
        renderTodos();
    }
}

function onToggleTodo(elTodo, todoId) {
    // console.log('Toggling..', todoId);
    toggleTodo(todoId);
    // elTodo.classList.toggle('done') // but also need to re-render stat
    renderTodos();
}

function onAddTodo() {
    const elInputTxt = document.querySelector('.input-txt');
    const elInputImp = document.querySelector('.input-imp');
    if (!elInputTxt.value) {
        alert('please enter a todo!');
    } else if (!elInputImp.value) {
        alert('please enter level of importance!');
    }
    if (elInputImp.value > 0 && elInputImp.value < 4) {
        addTodo(elInputTxt.value, elInputImp.value);
    } else {
        alert('value is not a number between 1-3!');
        // console.log('Adding Todo', elInputTxt.value, elInputImp.value);
    }
    // console.log('Adding Todo', elInputTxt.value, elInputImp.value);
    elInputTxt.value = '';
    elInputImp.value = '';
    renderTodos();
}

function onSetFilter(filterBy) {
    // console.log('Filtering By', filterBy);
    setFilter(filterBy);
    renderTodos();
}

function onSortBy(sortBy) {
    // console.log('sorting By', sortBy);
    setSort(sortBy);
    renderTodos();
}