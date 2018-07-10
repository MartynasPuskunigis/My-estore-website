import * as React from "react";

import { ProductsContainer } from "./../containers/products-container";

export class HomeView extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <div>This is the home page</div>
        <div>List of products currently on sale:</div>
        <ProductsContainer />
      </div>
    );
  }
}
