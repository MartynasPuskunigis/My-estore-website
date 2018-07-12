import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, Route, Router } from "react-router-dom";

import { LoginView } from "./components/login-view";
import { RegisterView } from "./components/register-view";
import { HomeView } from "./components/home-view";
import { NavigationView } from "./components/navigation-view";
import { NotFoundView } from "./components/not-found-view";
import { ProfileView } from "./components/profile-view";
//import { WorldMapView } from "./components/map-view";
import { AppHistory } from "./router/app-history";

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <Router history={AppHistory}>
                <div>
                    <NavigationView  />
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route path="/login" component={LoginView} />
                        <Route path="/register" component={RegisterView} />
                        <Route path="/profile" component={ProfileView} />
                        {/* <Route path="/map" component={WorldMapView} /> */}
                        <Route component={NotFoundView} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
