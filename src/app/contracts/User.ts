import { Order } from "./Order";
import { Product } from "./Product";

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    country: string;
    orders: Order[];
    productsOnSale: Product[];
}
