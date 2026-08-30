import { Order } from "./order";
import { id } from "./product";

export class User implements id {
    private userId:string;
    private name:string;
    private email:string;
    private orders: Order[] = [];

    constructor(userId:string, name:string, email:string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    public getId(): string {
        return this.userId;
    }
    public getName(): string {
        return this.name;
    }
    public getEmail(): string {
        return this.email;
    }
   public placeOrder(order: Order): void {
    this.orders.push(order);
  }
}