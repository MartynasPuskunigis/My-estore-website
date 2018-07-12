import * as React from "react";
import * as ReactDOM from "react-dom";

import { RouterClass } from "./router/router";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <RouterClass/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
