import { ReduceStore, ActionHandler } from "simplr-flux";

import { EStoreAddProduct } from "./../actions/estone-actions";

import { Product } from "./../contracts/Product";

interface StoreState {
    allProducts: Product[];
}

class ProductsReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(EStoreAddProduct, this.onAddProduct);
    }

    private onAddProduct: ActionHandler<EStoreAddProduct, StoreState> = (action, state) => {
        const newId = Number(new Date().getTime());
        const newProduct: Product = {
            id: newId,
            productName: action.name,
            condition: action.condition,
            moreDetails: action.moreDetails,
            quantity: action.amount,
            price: action.price
        };

        return {
            allProducts: [...state.allProducts, newProduct]
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
            allProducts: []
        };
    }
}

export const ProductsReduceStore = new ProductsReduceStoreClass();
