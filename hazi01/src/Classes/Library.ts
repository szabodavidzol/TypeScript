import { Book } from './Book';
import { ILibrary } from '../interfaces/ILibrary';

class Library implements ILibrary {
    public _books: Book[];

    constructor() {
        this._books = [];
    }

    addBook(book: Book): void {
        this._books.push(book);
    }

    removeBook(id: string): void {
        const index = this._books.findIndex(book => book['_id'] === id);
        if (index !== -1) {
            this._books.splice(index, 1);
        }
    }

    findBookById(id: string): Book | undefined {
        return this._books.find(book => book['_id'] === id);
    }

    listAllBooks(): Book[] {
        if (this._books.length === 0) {
            console.log("Nincs könyv a könyvtárban.");
        }
        return this._books;
    }
}

export { Library };