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
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/map">Map</NavLink>
                </div>
            );
        } else {
            return (
                <div>
                    <div>Hi, {this.state.currentUser.username}</div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/profile">My profile</NavLink>
                    <NavLink onClick={this.onLogOutClick} to="/">
                        Log out
                    </NavLink>
                    <NavLink to="/map">Map</NavLink>
                </div>
            );
        }
    }
}
export const NavigationContainer = Container.create(NavigationContainerClass);
