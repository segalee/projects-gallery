'use strict';

//BONUS: Add simple paging with Next and Prev buttons
//  update the disabled property of the button appropriately
//BONUS: Add this pages selection ui component

function onOpenModal(id) {
    createModal(id);
}

function onSubmitForm() {
    // get text& price value
    // validate if values entered
    //update model
    //render
    //save to local storage
}

function createModal(bookIdx) {
    const book = getBookById(bookIdx);
    const elModal = document.querySelector('.modal');
    elModal.querySelector('h2').innerText = book.name;
    elModal.querySelector('.price').innerText = `${book.price}$`;
    elModal.querySelector('img').src = book.imgUrl;
    elModal.querySelector('.desc').innerText = book.desc;
    elModal.querySelector('.rate').innerText = book.rate;
    elModal.querySelector('.rate').value = book.rate;
    // <input class="rate" type="number" min="0" max="10">
    elModal.classList.add('open');
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open');
    document.querySelector('.close-modal').display = 'none';
}

//will prompt for the book new price and call the service's function
//BONUS: Read the data from the user using an <input> instead of prompt
function onUpdateBook(id) {
    // gUpdatedbookId

    var newName = prompt('Enter book name');
    var newPrice = +prompt('Enter book price');
    if (!newPrice || !newName) return;
    updateBook(id, newName, newPrice);
    renderBooks();
    // if (newPrice && newName) {
    //     updateBook(id, newName, newPrice);
    //     renderBooks();
    // } else {
    //     return;
    // }
}

//will use the service's function removeBook(bookId)
function onRemoveBook(id) {
    removeBook(id);
    renderBooks();
}

function onCreateBook() {
    var name = document.querySelector('.title-input').value;
    var price = document.querySelector('.price-input').value;

    if (price && name) {
        addBook(name, price);
        renderBooks();
        document.querySelector('.create').style.display = 'block';
    } else {
        return;
    }
}

//will read (prompt) the details from the user: name and price
// then will call a function addBook(name, price)
// renderBooks()
//BONUS: Read the data from the user using an <input> instead of prompt
function onAddBook() {
    document.querySelector('.create-book-modal').style.display = 'block';
    document.querySelector('.create').style.display = 'none';
}

//will render the books with table rows <tr> and <td>
function renderBooks() {
    const books = getBooks();
    // console.log(books);
    const strHTML = books.map((book) => {
        return `<tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.price}</td>

                <td><button onClick ="onOpenModal('${book.id}')" class="read">Read</button></td>
                <td><button onClick ="onUpdateBook('${book.id}')" class="update">Update</button></td>
                <td><button onClick ="onRemoveBook('${book.id}')" class="delete">Delete</button></td>
            </tr>`;
    });
    var elTable = document.querySelector('tbody');
    elTable.innerHTML = strHTML.join('');
    // console.log(strHTML);
}