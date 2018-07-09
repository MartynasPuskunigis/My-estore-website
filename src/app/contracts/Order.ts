import { Product } from "./Product";

export interface Order {
    id: number;
    orderedProducts: Array<{
        orderedProduct: Product[],
        orderedQuantity: number
    }>;
}
