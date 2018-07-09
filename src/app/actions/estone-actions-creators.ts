import { Dispatcher } from "simplr-flux";

import { EStoreAddNewProductAction, EStoreAddNewUserAction } from "./estone-actions";

export namespace EStoreActionsCreators {
  export function addProductForSale(
    productName: string,
    quantity: number,
    productCondition: string,
    details: string,
    price: number,
    seller: string
  ): void {
    Dispatcher.dispatch(new EStoreAddNewProductAction(productName, quantity, productCondition, details, price, seller));
  }
  export function addNewUser(
    email: string,
    username: string,
    password: string,
    country: string,
  ): void {
    Dispatcher.dispatch(new EStoreAddNewUserAction(email, username, password, country));
  }
}
