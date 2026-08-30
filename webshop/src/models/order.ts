import { Product } from './product';

enum OrderStatus {
    New = 'új',
    Processing = 'feldolgozás alatt',
    Delivered = 'kézbesítve'
}

export class Order {
    private Orderid:string;
    private products:Product[];
    private status:OrderStatus;

    constructor(Orderid:string, products:Product[]) {
        this.Orderid = Orderid;
        this.products = products;
        this.status = OrderStatus.New;
    }

       

}