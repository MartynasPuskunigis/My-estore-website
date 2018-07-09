import { Dispatcher } from "simplr-flux";

import { EStoreAddNewProductAction, EStoreAddNewUserAction, EStoreChangeCurrentUserAction } from "./estone-actions";

import { User } from "./../contracts/User";

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
    export function addNewUser(emailAddress: string, nickname: string, userPassword: string, userCountry: string): void {
        const newId = Number(new Date().getTime());
        const newCurrentUser: User = {
            id: newId,
            email: emailAddress,
            username: nickname,
            password: userPassword,
            country: userCountry,
            orders: [],
            productsOnSale: []
        };
        Dispatcher.dispatch(new EStoreAddNewUserAction(newCurrentUser));
        Dispatcher.dispatch(new EStoreChangeCurrentUserAction(newCurrentUser));
    }
}
