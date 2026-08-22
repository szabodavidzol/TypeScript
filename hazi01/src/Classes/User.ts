import { Library } from './Library';
import { Book } from './Book';

class User {
    public _userId: string;
    public _name: string;
    public _email: string;

    constructor(userId: string, name: string, email: string) {
        this._userId = userId;
        this._name = name;
        this._email = email;
    }
    borrowBook(library: Library, bookId: string) {
        const book = library.findBookById(bookId);
        if (book) {
            library.removeBook(bookId);
        }
    }
}

export { User };