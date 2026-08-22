class Book {
    public _id: string;
    public _title: string;
    public _author: string;
    public _price: number;

    constructor(id: string, title: string, author: string, price: number) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._price = price;
    }
    
}

export { Book };