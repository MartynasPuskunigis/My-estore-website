import { Dispatcher } from "simplr-flux";

import { EStoreAddProduct } from "./estone-actions";

export namespace EStoreActionsCreators {
  export function addProduct(
    productName: string,
    quantity: number,
    productCondition: string,
    details: string,
    price: number
  ): void {
    Dispatcher.dispatch(new EStoreAddProduct(productName, quantity, productCondition, details, price));
  }
}
