import { Book } from '../Classes/Book';


interface ILibrary {
    books: Book[];
    addBook(book: Book): void;
    removeBook(id: string): void;
    findBookById(id: string): Book | undefined;
    listAllBooks(): Book[];
}

export { ILibrary };