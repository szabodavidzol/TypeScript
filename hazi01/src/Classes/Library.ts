import { Book } from './Book';

class Library {
    private _books: Book[];

    constructor() {
        this._books = [];
    }

    addBook(book: Book) {
        this._books.push(book);
    }

    removeBook(id: string) {
        this._books = this._books.filter(book => book['_id'] !== id);
    }

    findBookById(id: string) {
        return this._books.find(book => book['_id'] === id);
    }

    listAllBooks() {
        return this._books;
    }
}

export { Library };