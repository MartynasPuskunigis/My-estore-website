import { ReduceStore, ActionHandler } from "simplr-flux";

import {
    EStoreAddNewUserAction,
    EStoreChangeCurrentUserAction,
    EStoreLogOutAction,
    EStoreLogInAction,
    EStoreAddNewProductToUserAction
} from "./../actions/estone-actions";

import { User } from "./../contracts/User";

interface StoreState {
    allUsers: User[];
    currentUser: User;
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
        this.registerAction(EStoreLogOutAction, this.onLogOutClicked.bind(this));
        this.registerAction(EStoreLogInAction, this.onLogInSubmit.bind(this));
        this.registerAction(EStoreAddNewProductToUserAction, this.onNewProductAdded.bind(this));
    }

    private onAddNewUser: ActionHandler<EStoreAddNewUserAction, StoreState> = (action, state) => ({
        ...state,
        allUsers: [...state.allUsers, action.newUser]
    });

    private onChangeCurrentUser: ActionHandler<EStoreChangeCurrentUserAction, StoreState> = (action, state) => ({
        allUsers: [...state.allUsers],
        currentUser: action.newCurrentUser
    });

    private onLogOutClicked: ActionHandler<EStoreLogOutAction, StoreState> = (action, state) => ({
        allUsers: [...state.allUsers],
        currentUser: loggedOutUser
    });

    private onLogInSubmit: ActionHandler<EStoreLogInAction, StoreState> = (action, state) => {
        for (let i = 0; i < state.allUsers.length; i++) {
            if (state.allUsers[i].username === action.username) {
                if (state.allUsers[i].password === action.userPassword) {
                    return {
                        allUsers: [...state.allUsers],
                        currentUser: state.allUsers[i]
                    };
                } else {
                    alert("Incorrect password!");
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
                console.log("nu veik");
                const newUsersList = state.allUsers;
                newUsersList[i].productsOnSale.push(action.productToAddToUser);
                return {
                    currentUser: newUsersList[i],
                    allUsers: [...newUsersList]
                };
            }
        }
        return {
            ...state
        };
    };

    public getInitialState(): StoreState {
        return {
            allUsers: [],
            currentUser: loggedOutUser
        };
    }
}

export const UsersReduceStore = new UsersReduceStoreClass();
