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
export { User };
//# sourceMappingURL=User.js.map