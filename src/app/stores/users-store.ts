import { ReduceStore, ActionHandler } from "simplr-flux";

import {
    EStoreAddNewUserAction,
    EStoreChangeCurrentUserAction,
    EStoreLogOutAction,
    EStoreLogInAction,
    EStoreAddNewProductToUserAction,
    EStoreDeleteProductFromUserAction
} from "../actions/estone-actions";

import { User } from "../contracts/User";
import { AppHistory } from "../router/app-history";
import { UserMarker } from "../contracts/UserMarker";
import { CountryInfo } from "./../contracts/countries";

interface StoreState {
    allUsers: User[];
    currentUser: User;
    usersCoordinates: UserMarker[];
}

export const loggedOutUser = {
    email: "",
    username: "noUser",
    id: 0,
    country: "",
    password: "",
    orders: [],
    productsOnSale: []
};

class UsersReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(EStoreAddNewUserAction, this.onAddNewUser);
        this.registerAction(EStoreChangeCurrentUserAction, this.onChangeCurrentUser);
        this.registerAction(EStoreLogOutAction, this.onLogOutClicked);
        this.registerAction(EStoreLogInAction, this.onLogInSubmit);
        this.registerAction(EStoreAddNewProductToUserAction, this.onNewProductAdded);
        this.registerAction(EStoreDeleteProductFromUserAction, this.onDeleteProduct);
    }

    private onAddNewUser: ActionHandler<EStoreAddNewUserAction, StoreState> = (action, state) => {
        const newMarker: UserMarker = {
            userId: action.newUser.id,
            latitude: -90,
            longitude: -180
        };
        for (let i = 0; i < CountryInfo.length; i++) {
            if (CountryInfo[i].name.toLowerCase() === action.newUser.country.toLowerCase()) {
                newMarker.latitude = CountryInfo[i].latlng[0];
                newMarker.longitude = CountryInfo[i].latlng[1];
            }
        }
        return {
            ...state,
            usersCoordinates: [...state.usersCoordinates, newMarker],
            allUsers: [...state.allUsers, action.newUser]
        };
    };

    private onChangeCurrentUser: ActionHandler<EStoreChangeCurrentUserAction, StoreState> = (action, state) => ({
        ...state,
        allUsers: [...state.allUsers],
        currentUser: action.newCurrentUser
    });

    private onLogOutClicked: ActionHandler<EStoreLogOutAction, StoreState> = (action, state) => ({
        ...state,
        allUsers: [...state.allUsers],
        currentUser: loggedOutUser
    });

    private onLogInSubmit: ActionHandler<EStoreLogInAction, StoreState> = (action, state) => {
        for (let i = 0; i < state.allUsers.length; i++) {
            if (state.allUsers[i].username === action.username) {
                if (state.allUsers[i].password === action.userPassword) {
                    AppHistory.push({ pathname: "/" });
                    return {
                        ...state,
                        allUsers: [...state.allUsers],
                        currentUser: state.allUsers[i]
                    };
                } else {
                    alert("Incorrect password!");
                    return {
                        ...state
                    };
                }
            }
        }
        alert("This account does not exist, maybe you typed the username wrong");
        return {
            ...state
        };
    };

    private onNewProductAdded: ActionHandler<EStoreAddNewProductToUserAction, StoreState> = (action, state) => {
        for (let i = 0; i < state.allUsers.length; i++) {
            if (state.allUsers[i].id === action.productSeller.id) {
                const newUsersList = state.allUsers;
                newUsersList[i].productsOnSale.push(action.productToAddToUser);
                return {
                    ...state,
                    currentUser: newUsersList[i],
                    allUsers: [...newUsersList]
                };
            }
        }
        return {
            ...state
        };
    };

    private onDeleteProduct: ActionHandler<EStoreDeleteProductFromUserAction, StoreState> = (action, state) => {
        const newUserList = state.allUsers;
        for (let i = 0; i < newUserList.length; i++) {
            if (newUserList[i].id === action.userToDeleteFromId) {
                newUserList[i].productsOnSale = newUserList[i].productsOnSale.filter(product => product.id !== action.productToDeleteId);
                break;
            }
        }
        return {
            ...state,
            allUsers: [...newUserList]
        };
    };

    public getInitialState(): StoreState {
        return {
            allUsers: [],
            currentUser: loggedOutUser,
            usersCoordinates: []
        };
    }
}

export const UsersReduceStore = new UsersReduceStoreClass();
