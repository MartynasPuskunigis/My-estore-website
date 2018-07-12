import * as React from "react";

import { ProductsContainer } from "./../containers/products-container";
import { EStoreActionsCreators } from "../actions/estone-actions-creators";

export class HomeProductsView extends React.Component {

    private searchInputHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
        EStoreActionsCreators.searchForUserInput(event.target.value);
    }

  public render(): JSX.Element {
    return (
      <div>
        <div>List of products currently on sale:</div>
        <div>
            <div>Search for product:</div>
            <div><input onChange={this.searchInputHandler} type="text" placeholder="Type the product you are searching"/></div>
        </div>
        <ProductsContainer />
      </div>
    );
  }
}
