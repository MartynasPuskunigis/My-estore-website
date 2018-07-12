import { ReduceStore, ActionHandler } from "simplr-flux";

import { EStoreAddNewProductAction, EStoreDeleteProductAction, EStoreSearchUserInputAction } from "./../actions/estone-actions";

import { Product } from "./../contracts/Product";

//import { EStoreActionsCreators } from "./../actions/estone-actions-creators";

interface StoreState {
    allProducts: Product[];
    filteredProducts: Product[];
}

class ProductsReduceStoreClass extends ReduceStore<StoreState> {
    constructor() {
        super();
        this.registerAction(EStoreAddNewProductAction, this.onAddProduct);
        this.registerAction(EStoreDeleteProductAction, this.onDeleteProduct);
        this.registerAction(EStoreSearchUserInputAction, this.onSearchProduct);
    }

    private onAddProduct: ActionHandler<EStoreAddNewProductAction, StoreState> = (action, state) => ({
        filteredProducts: [action.productToAdd, ...state.filteredProducts],
        allProducts: [action.productToAdd, ...state.allProducts]
    });

    private onDeleteProduct: ActionHandler<EStoreDeleteProductAction, StoreState> = (action, state) => {
        const newProductList = state.allProducts.filter(product => product.id !== action.productToDeleteId);
        return {
            filteredProducts: newProductList,
            allProducts: newProductList
        };
    };

    private onSearchProduct: ActionHandler<EStoreSearchUserInputAction, StoreState> = (action, state) => {
        if (action.userInput === "") {
            return {
                ...state,
                filteredProducts: [...state.allProducts]
            };
        }
        const newFilteredProducts = state.allProducts.filter(x => x.productName.toLowerCase().startsWith(action.userInput.toLowerCase()));
        return {
            ...state,
            filteredProducts: newFilteredProducts
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
            allProducts: [],
            filteredProducts: []
        };
    }
}

export const ProductsReduceStore = new ProductsReduceStoreClass();
