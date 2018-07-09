import { ReduceStore, ActionHandler } from "simplr-flux";

import { EStoreAddNewUserAction, EStoreChangeCurrentUserAction } from "./../actions/estone-actions";

import { User } from "./../contracts/User";

interface StoreState {
    allUsers: User[];
    currentUser: User;
}

class UsersReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(EStoreAddNewUserAction, this.onAddNewUser);
        this.registerAction(EStoreChangeCurrentUserAction, this.onChangeCurrentUser);
    }

    private onAddNewUser: ActionHandler<EStoreAddNewUserAction, StoreState> = (action, state) => ({
        ...state,
        allUsers: [...state.allUsers, action.newUser]
    });

    private onChangeCurrentUser: ActionHandler<EStoreChangeCurrentUserAction, StoreState> = (action, state) => ({
        ...state,
        currentUser: action.newCurrentUser
    });

    public getInitialState(): StoreState {
        return {
            allUsers: [],
            currentUser: {
                email: "",
                username: "",
                id: 0,
                country: "",
                password: "",
                orders: [],
                productsOnSale: []
            }
        };
    }
}

export const UsersReduceStore = new UsersReduceStoreClass();
