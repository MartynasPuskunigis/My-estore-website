import * as React from "react";

import { HomeProductsView } from "./../components/home-products-view";

export class HomeView extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <div>This is the home page</div>
        <HomeProductsView />
      </div>
    );
  }
}
