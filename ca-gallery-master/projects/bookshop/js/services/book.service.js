'use strict';
var gBooks;

const STORAGE_KEY = 'booksDB';
// book-service - gBooks
// 1. removeBook(bookId) //splice from gArray&deleteBookFromLocalStorage
// 2. addBook(name, price) //pushes a new book into the gBooks model.
// 3. updateBook(bookId) //replacing the new book inside the model
// updating the local storag--> storeBooksToLocalStorage()
// renderBooks()

function onInit() {
    _createBooks();
    renderBooks();
}

function getBooks() {
    var books = gBooks;
    // .filter(book =>
    //     book.vendor.includes(gFilterBy.vendor) &&
    //     book.maxSpeed >= gFilterBy.minSpeed)

    // const startIdx = gPageIdx * PAGE_SIZE
    // books = books.slice(startIdx, startIdx + PAGE_SIZE)
    return books;
}

// function openModal(bookId) {
//     const bookIdx = gBooks.findIndex((book) => {
//         return book.id === bookId;
//     });
//     return bookIdx;
// }

function getBookById(bookId) {
    const books = getBooks();
    const book = books.find(function(book) {
        return bookId === book.id;
    });
    return book;
}

//replacing the new book inside the model
// updating the local storage--> storeBooksToLocalStorage()
// renderBooks()
function updateBook(bookId, updName, updPrice) {
    const bookIdx = gBooks.findIndex((book) => {
        return book.id === bookId;
    });
    gBooks[bookIdx].name = updName;
    gBooks[bookIdx].price = updPrice;
    _saveBooksToLocalStorage();
}

function addBook(name, price) {
    const newAddedBook = _createBook(name, price);
    gBooks.unshift(newAddedBook);
    _saveBooksToLocalStorage('booksDB');
}

//splice from gBooks & deleteBookFromLocalStorage
function removeBook(bookId) {
    const bookIdx = gBooks.findIndex((book) => {
        return book.id === bookId;
    });
    gBooks.splice(bookIdx, 1);
    _saveBooksToLocalStorage();
    console.log(gBooks);
}

// will populate a Books array with Book objects(gBooks array with 4 Books)
function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY);
    if (!books || books.length === 0) {
        books = [];
        const book1 = _createBook('War and Peace', 19.99, 7, 'img/peace.jpg');
        const book2 = _createBook(
            'Catcher in the Rye',
            19.99,
            8,
            'img/catcher.jpg'
        );
        const book3 = _createBook('Pride and Prejudice', 24.99, 9, 'img/pride.jpg');
        const book4 = _createBook(
            'Crime and Punishment',
            31.99,
            10,
            'img/crime.jpg'
        );
        books.push(book1, book2, book3, book4);
    }
    gBooks = books;
    _saveBooksToLocalStorage();
}

// will populate a Book with Book object
function _createBook(name, price, rate = 0, imgUrl = 'img/book.jpg') {
    return {
        id: makeId(),
        name,
        price,
        rate,
        imgUrl,
        desc: makeLorem(),
    };
}

// saves the Books to localStorage
function _saveBooksToLocalStorage() {
    saveToStorage('booksDB', gBooks);
}

function makeId(length = 6) {
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeLorem(wordCount = 100) {
    const words = [
        'The character',
        'above',
        'the book',
        'was',
        'the color of television',
        'brave',
        'to',
        'a tiny man',
        '.',
        'All',
        'this happened',
        'more or less',
        '.',
        'The author',
        'had',
        'the story',
        'bit by bit',
        'from various people',
        'and',
        'as generally',
        'happens',
        'in such cases',
        'each time',
        'it',
        'was',
        'a different story',
        '.',
        'It',
        'was',
        'a pleasure',
        'to',
        'happy ending',
    ];
    var txt = '';
    while (wordCount > 0) {
        wordCount--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}