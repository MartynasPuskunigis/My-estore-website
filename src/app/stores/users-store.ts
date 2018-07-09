import { ReduceStore, ActionHandler } from "simplr-flux";

import { EStoreAddNewUserAction } from "./../actions/estone-actions";

import { User } from "./../contracts/User";

interface StoreState {
    allUsers: User[];
}

class UsersReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(EStoreAddNewUserAction, this.onAddNewUser);
    }

    private onAddNewUser: ActionHandler<EStoreAddNewUserAction, StoreState> = (action, state) => {
        const newId = Number(new Date().getTime());
        const newUser: User = {
            id: newId,
            email: action.userEmailAddress,
            username: action.username,
            password: action.userPassword,
            country: action.userCountry
        };

        return {
            allUsers: [...state.allUsers, newUser]
        };
    };

    //   protected static calculateState(state: StoreState): StoreState {
    //     switch (state.currentFilter) {
    //       case Filter.Uncompleted: {
    //         state.tasksToShow = state.allTasks.filter(item => item.isDone !== true);
    //         break;
    //       }
    //       case Filter.Completed: {
    //         state.tasksToShow = state.allTasks.filter(
    //           item => item.isDone !== false
    //         );
    //         break;
    //       }
    //       case Filter.ShowAll: {
    //         state.tasksToShow = state.allTasks;
    //         break;
    //       }
    //     }
    //     return state;
    //   }

    public getInitialState(): StoreState {
        return {
            allUsers: []
        };
    }
}

export const UsersReduceStore = new UsersReduceStoreClass();
