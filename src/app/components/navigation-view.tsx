import * as React from "react";
import { NavLink } from "react-router-dom";

export class NavigationView extends React.Component {

    public render(): JSX.Element {
        return (
           <div>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/login">Login</NavLink>
               <NavLink to="/register">Register</NavLink>
               <NavLink to="/profile">My profile</NavLink>
           </div>
        );
    }
}
