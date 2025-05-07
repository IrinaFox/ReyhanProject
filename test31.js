class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }

    listBooks() {
     this.books.title
    }
}



//test
const myLibrary = new Library();
    myLibrary.books.push({title: 'Преступление и наказание', author: "Фёдор Достоевский"});
    myLibrary.books.push({title: 'Война и мир', author: "Лев Толстой"});

    console.log(myLibrary.books);
    myLibrary.listBooks()
