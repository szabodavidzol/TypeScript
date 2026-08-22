"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Classes/Book");
const Library_1 = require("./Classes/Library");
const User_1 = require("./Classes/User");
let myLibrary = new Library_1.Library();
let book1 = new Book_1.Book('1', 'Egri csillagok', 'Gárdonyi Géza', 3500);
let book2 = new Book_1.Book('2', 'Alkonyat', 'Stephenie Meyer', 5900);
let book3 = new Book_1.Book('3', 'Harry Potter és a bölcsek köve', 'J.K. Rowling', 5500);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
let user = new User_1.User('1', 'Teszt Elek', 'teszt@elek.com');
user.borrowBook(myLibrary, '2');
myLibrary.listAllBooks().forEach(book => {
    console.log(`ID: ${book._id}, Title: ${book._title}, Author: ${book._author}, Price: ${book._price}`);
});
