"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        const index = this.books.findIndex(book => book['_id'] === id);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }
    findBookById(id) {
        return this.books.find(book => book['_id'] === id);
    }
    listAllBooks() {
        if (this.books.length === 0) {
            console.log("Nincs könyv a könyvtárban.");
        }
        return this.books;
    }
}
exports.Library = Library;
