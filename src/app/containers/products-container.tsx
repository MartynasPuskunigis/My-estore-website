import * as React from "react";
import { Container } from "flux/utils";

import { Product } from "./../contracts/Product";
import { ProductsReduceStore } from "./../stores/products-store";
import { ProductItemView } from "../components/product-item-view";

interface State {
    products: Product[];
}

class ProductsContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [ProductsReduceStore];
    }

    public static calculateState(state: State): State {
        return {
            products: ProductsReduceStore.getState().filteredProducts
        };
    }

    public render(): JSX.Element | JSX.Element[] {
        const productList = this.state.products.map(product => (
            <ProductItemView
                key={`product-item-${product.id}`}
                product={product}
            />
        ));
        if (this.state.products.length !== 0) {
            return (<div>{productList}</div>);
        } else {
            return (<div>There are currently no products on sale</div>);
        }
    }
}
export const ProductsContainer = Container.create(ProductsContainerClass);
