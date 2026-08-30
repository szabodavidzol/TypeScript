import { Product } from './product';
import {id} from './product';

export enum OrderStatus {
    New = 'új',
    Processing = 'feldolgozás alatt',
    Delivered = 'kézbesítve'
}

export class Order implements id {
    private orderId:string;
    private products:Product[];
    private status:OrderStatus;    

    constructor(orderId:string, products:Product[]) {
        this.orderId = orderId;
        this.products = products;
        this.status = OrderStatus.New;
    }

    public getId(): string {
        return this.orderId;
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