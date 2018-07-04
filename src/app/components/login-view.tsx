import * as React from "react";
import { Link } from "react-router-dom";

export class LoginView extends React.Component {

    public render(): JSX.Element {
        return (
           <div>This is the login page
               <Link to="/">Home</Link>
           </div>
        );
    }
}
