"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId, name, email) {
        this._userId = userId;
        this._name = name;
        this._email = email;
    }
    borrowBook(library, bookId) {
        const book = library.findBookById(bookId);
        if (book) {
            library.removeBook(bookId);
        }
    }
}
exports.User = User;
