import { Book } from './Classes/Book';
import { Library } from './Classes/Library';
import { User } from './Classes/User';
let myLibrary = new Library();
let book1 = new Book('1', 'Egri csillagok', 'Gárdonyi Géza', 3500);
let book2 = new Book('2', 'Alkonyat', 'Stephenie Meyer', 5900);
let book3 = new Book('3', 'Harry Potter és a bölcsek köve', 'J.K. Rowling', 5500);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
let user = new User('1', 'Teszt Elek', 'teszt@elek.com');
user.borrowBook(myLibrary, '2');
myLibrary.listAllBooks().forEach(book => {
    console.log(`ID: ${book._id}, Title: ${book._title}, Author: ${book._author}, Price: ${book._price}`);
});
//# sourceMappingURL=index.js.map