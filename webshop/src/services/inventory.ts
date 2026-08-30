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
        this.products = this.products.filter(product => product.id() !== productId);
    }

    public searchProductByName(name: string): Product[] {
        return this.products.filter(product => product.name().toLowerCase().includes(name.toLowerCase()));
    }

    public getProductById(productId: string): Product | undefined {
        return this.products.find(product => product.id() === productId);
    }

    public getAllProducts(): Product[] {
        return this.products;
    }

}