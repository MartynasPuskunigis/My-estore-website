import * as React from "react";

import { HomeProductsView } from "./home-products-view";

import "./home-view-styles.css";

export class HomeView extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="banner">
                <div className="wrapper">
                    <div className="header">
                        <div className="header-text">This is the home page</div>
                    </div>
                    <HomeProductsView />
                </div>
            </div>
        );
    }
}
