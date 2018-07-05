import * as React from "react";
import { Container } from "flux/utils";

import { Product } from "./../contracts/Product";

import { ProductsReduceStore } from "./../stores/products-store";

interface State {
    products: Product[];
}

class ProductsContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [ProductsReduceStore];
    }

    public static calculateState(state: State): State {
        return {
            products: ProductsReduceStore.getState().allProducts
        };
    }

    public render(): JSX.Element | JSX.Element[] {
        const productList = this.state.products.map(data => (
            <div className="TableRow" key={data.id}>
                <div className="TableCellText">{data.productName}</div>
                <div className="TableCellText">{data.quantity}</div>
                <div className="TableCellText">{data.condition}</div>
                <div className="TableCellText">{data.moreDetails}</div>
                <div className="TableCellText">{data.price}</div>
            </div>
        ));
        if (this.state.products.length !== 0) {
            return (<div>{productList}</div>);
        } else {
            return (<div>There are currently no products on sale</div>);
        }
    }
}
export const ProductsContainer = Container.create(ProductsContainerClass);
