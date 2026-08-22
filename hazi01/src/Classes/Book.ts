class Book {
    private _id: string;
    private _title: string;
    private _author: string;
    private _price: number;

    constructor(id: string, title: string, author: string, price: number) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._price = price;
    }
    
}

export { Book };