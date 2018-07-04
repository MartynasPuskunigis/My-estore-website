import * as React from "react";
import { NavLink } from "react-router-dom";

export class NavigationView extends React.Component {

    public render(): JSX.Element {
        return (
           <div>
               <div><NavLink to="/">Home</NavLink></div>
               <div><NavLink to="/login">Login</NavLink></div>
               <div><NavLink to="/register">Register</NavLink></div>
           </div>
        );
    }
}
