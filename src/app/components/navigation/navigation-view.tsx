import * as React from "react";

import { NavigationContainer } from "../../containers/navigation-container";

import "./navigation-view-styles.css";

export class NavigationView extends React.Component {
    public render(): JSX.Element {
       return (
        <NavigationContainer/>
       );
    }
}
