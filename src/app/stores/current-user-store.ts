import { ReduceStore, ActionHandler } from "simplr-flux";

//import { EStoreAddProduct } from "./../actions/estone-actions";

import { Product } from "./../contracts/Product";
import { Order } from "./../contracts/Order";

interface StoreState {
    username: string;
    userProducts: Product[];
    userOrders: Order[];
}

class CurrentUserReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
    }

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
            username: "",
            userOrders: [],
            userProducts: []
        };
    }
}

export const CurrentUserReduceStore = new CurrentUserReduceStoreClass();
