class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }

    listBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" — ${book.author}`);
        });
    }

    findBookByTitle(title) {
        const foundBook = this.books.filter((book) => book.title);
        return foundBook;
    }

    removeBook(title) {
        const originalLength = this.books.length;
        this.books = this.books.filter((book) => book.title);
        const removedCount = originalLength - this.books.length;

        console.log(`Удалено книг: ${removedCount} с названием "${title}".`);

    }
}



//test
const myLibrary = new Library();
    myLibrary.addBook({title: 'Преступление и наказание', author: "Фёдор Достоевский"});
    myLibrary.addBook({title: 'Война и мир', author: "Лев Толстой"});

    console.log(myLibrary.books);
    myLibrary.listBooks();
    myLibrary.findBookByTitle('Война и мир');
    myLibrary.removeBook('Преступление и наказание')
