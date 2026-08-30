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

    public getId(): string {
        return this.Orderid;
    }

    public getStatus(): OrderStatus {
        return this.status;
    } 
    
    public updateStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
    }

    public calculateTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.getPrice(), 0);
    }

}