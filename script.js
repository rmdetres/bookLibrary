/*
Write a constructor for making “Book” objects. We will 
revisit this in the project at the end of this lesson. 
Your book objects should have the book’s title, author, 
the number of pages, and whether or not you have read the book.



*/

document.addEventListener('DOMContentLoaded', () => {

    const myLibrary = [];

    function Book(bookTitle, author, pages, readItorNot) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.pages = pages;
        this.readItorNot = readItorNot;

        this.info = function() {
            return `${this.bookTitle}. By ${this.author}, ${this.pages} pages, ${this.readItorNot}`;
        };
    }

    function addBookToLibrary(book) {
        myLibrary.push(book);
        console.log(myLibrary);
    }

    function createCards(book) {
        const container = document.getElementById('card-container');

        const card = document.createElement('div')
        card.className = 'card';

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content'; 

        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = book.bookTitle;

        const author = document.createElement('p')
        author.className = 'card-author ';
        author.textContent = book.author;

        const numberPages = document.createElement('p')
        numberPages.className = 'card-author';
        numberPages.textContent = book.pages;

        cardContent.appendChild(title);
        cardContent.appendChild(author);
        cardContent.appendChild(numberPages);

        card.appendChild(cardContent);
        container.appendChild(card);
    }

    const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
    addBookToLibrary(theHobbit);
    myLibrary.forEach(books => createCards(books));

    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const numberOfPages = document.getElementById('numberOfPages').value;

        const newBook = new Book(title, author, numberOfPages, 'not read yet');
        addBookToLibrary(newBook);
        createCards(newBook);

        form.reset(); // Reset form fields after submission
    });

});