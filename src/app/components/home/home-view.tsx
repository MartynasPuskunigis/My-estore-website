import * as React from "react";

import { HomeProductsView } from "./home-products-view";

export class HomeView extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <div className="banner">This is the home page</div>
        <HomeProductsView />
      </div>
    );
  }
}
