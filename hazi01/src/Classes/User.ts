import { Library } from './Library';
import { Book } from './Book';

class User {
    private _userId: string;
    private _name: string;
    private _email: string;

    constructor(userId: string, name: string, email: string) {
        this._userId = userId;
        this._name = name;
        this._email = email;
    }
    borrowBook(library: Library, id: string) {
        const book = library.findBookById(id);
        if (book) {
            library.removeBook(id);
        }
    }
}

export { User };