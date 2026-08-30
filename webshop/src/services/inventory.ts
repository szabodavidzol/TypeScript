import { Product } from '../models/product';

export class Inventory {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public removeProduct(productId: string): void {
        this.products = this.products.filter(product => product.getId() !== productId);
    }

    public searchProductByName(name: string): Product[] {
        return this.products.filter(product => product.getName().toLowerCase().includes(name.toLowerCase()));
    }

    public getProductById(productId: string): Product | undefined {
        return this.products.find(product => product.getId() === productId);
    }

    public getAllProducts(): Product[] {
        return this.products;
    }

    public isAvailable(productId: string): boolean {
        return this.products.some(product => product.getId() === productId);
    }

}