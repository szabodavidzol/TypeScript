import { Product } from './models/product';
import { Order, OrderStatus } from './models/order';
import { User } from './models/user';
import { Inventory } from './services/inventory';
import { UserService } from './services/userServices';

// Példa a webshop működésére
const inventory = new Inventory();
const userService = new UserService(inventory);

// Termékek hozzáadása az inventory-hoz
const product1 = new Product('1', 'ruha', 5000, 'Ez egy menő felső.');
const product2 = new Product('2', 'sapka', 3000, 'Ez egy cool sapka');
const product3 = new Product('3', 'kulacs', 2500, 'Nagy 1l-es kulacs');
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Felhasználó létrehozása
const user = userService.createUser('1', 'Tezst Elek', 'elek@teszt.com');

// Rendelés leadása
const order = userService.placeOrder(user.getId(), ['1', '2']);
if (order) {
    order.updateStatus(OrderStatus.Processing);
    console.log(`Rendelés leadva: ${order.getId()}, státusz: ${order.getStatus()}, összeg: ${order.calculateTotalPrice()} Ft`);
}