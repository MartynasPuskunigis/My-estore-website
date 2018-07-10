import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { LoginView } from "./components/login-view";
import { RegisterView } from "./components/register-view";
import { HomeView } from "./components/home-view";
import { NavigationView } from "./components/navigation-view";
import { NotFoundView } from "./components/not-found-view";
import { ProfileView } from "./components/profile-view";

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <BrowserRouter >
        <div>
          <NavigationView/>
          <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/profile" component={ProfileView} />
          <Route component={NotFoundView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
