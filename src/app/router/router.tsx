import * as React from "react";
import { Switch, Route, Router } from "react-router-dom";

import { LoginView } from "../components/login/login-view";
import { RegisterView } from "../components/register/register-view";
import { HomeView } from "../components/home/home-view";
import { NavigationView } from "../components/navigation/navigation-view";
import { NotFoundView } from "../components/not-found-view";
import { ProfileView } from "../components/profile/profile-view";
import { WorldMapView } from "../components/map/map-view";
import { AppHistory } from "./app-history";

export class RouterClass extends React.Component {
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
                        <Route path="/map" component={WorldMapView} />
                        <Route component={NotFoundView} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
