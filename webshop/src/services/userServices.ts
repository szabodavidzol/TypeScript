import { User } from '../models/user';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { Inventory } from './inventory';

export class UserService {
    private users: User[];    
    private inventory: Inventory;

    constructor(inventory: Inventory) {     
        this.users = [];
        this.inventory = inventory;
    }

    public createUser(userId: string, name: string, email: string): User {
        const newUser = new User(userId, name, email);
        this.users.push(newUser);
        return newUser;
    }

    public placeOrder(userId: string, productIds: string[]): Order | null {
        const user = this.users.find(user => user.getId() === userId);
        if (!user) {
            console.error(`Nem található felhasználó a megadott azonosítóval: ${userId}`);
            return null;
        }
        const products: Product[] = [];
        for (const productId of productIds) {
            const product = this.inventory.getProductById(productId);
            if (product) {
                products.push(product);
            } else {
                console.error(`Nem található termék a megadott azonosítóval: ${productId}`);
                return null;
            }
        }
        if (products.length === 0) {
            console.error(`A rendeléshez legalább egy terméket meg kell adni.`);
            return null;
        }

        const order = new Order(this.generateOrderId(), products);
        user.placeOrder(order);
        return order;
    }
        private generateOrderId(): string {
            return 'order-' + Math.random().toString(36).substr(2, 9);
        }
    }