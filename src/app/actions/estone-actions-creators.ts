import { Dispatcher } from "simplr-flux";

import {
    EStoreAddNewProductAction,
    EStoreAddNewUserAction,
    EStoreChangeCurrentUserAction,
    EStoreLogOutAction,
    EStoreLogInAction,
    EStoreAddNewProductToUserAction
} from "./estone-actions";

import { User } from "./../contracts/User";
import { Product } from "./../contracts/Product";

export namespace EStoreActionsCreators {
    export function addProductForSale(
        productName: string,
        quantity: number,
        productCondition: string,
        details: string,
        price: number,
        seller: User
    ): void {
        const newId = Number(new Date().getTime());
        const newProduct: Product = {
            id: newId,
            productName: productName,
            condition: productCondition,
            moreDetails: details,
            quantity: quantity,
            price: price,
            seller: seller.username
        };
        Dispatcher.dispatch(new EStoreAddNewProductAction(newProduct));
        Dispatcher.dispatch(new EStoreAddNewProductToUserAction(newProduct, seller));
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

    export function logOut(): void {
        Dispatcher.dispatch(new EStoreLogOutAction());
    }

    export function logIn(username: string, password: string): void {
        Dispatcher.dispatch(new EStoreLogInAction(username, password));
    }
}
