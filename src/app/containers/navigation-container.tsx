import * as React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "flux/utils";

import { User } from "./../contracts/User";

import { UsersReduceStore } from "./../stores/users-store";

import { EStoreActionsCreators } from "./../actions/estone-actions-creators";

interface State {
    currentUser: User;
}

class NavigationContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [UsersReduceStore];
    }

    public static calculateState(state: State): State {
        return {
            currentUser: UsersReduceStore.getState().currentUser
        };
    }

    private onLogOutClick: React.MouseEventHandler<HTMLAnchorElement> = event => {
        EStoreActionsCreators.logOut();
    };

    public render(): JSX.Element {
        if (this.state.currentUser.username === "noUser") {
            return (
                <div className="menu">
                    <div className="wrapper">
                        <div className="menu-logo">Logo</div>
                        <div className="menu-items">
                            <NavLink className="menu-button" to="/">
                                Home
                            </NavLink>
                            <NavLink className="menu-button" to="/login">
                                Login
                            </NavLink>
                            <NavLink className="menu-button" to="/register">
                                Register
                            </NavLink>
                            <NavLink className="menu-button" to="/map">
                                Map
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="menu">
                    <div className="wrapper">
                        <div className="menu-logo">Logo</div>
                        <div className="menu-items">
                            <div className="menu-greeting">Hi, {this.state.currentUser.username}</div>
                            <NavLink className="menu-button" to="/">
                                Home
                            </NavLink>
                            <NavLink className="menu-button" to="/profile">
                                My profile
                            </NavLink>
                            <NavLink className="menu-button" onClick={this.onLogOutClick} to="/">
                                Log out
                            </NavLink>
                            <NavLink className="menu-button" to="/map">
                                Map
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export const NavigationContainer = Container.create(NavigationContainerClass);
