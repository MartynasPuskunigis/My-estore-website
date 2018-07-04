import * as React from "react";
import { Link } from "react-router-dom";

export class RegisterView extends React.Component {

    public render(): JSX.Element {
        return (
           <div>This is the registration page
            <Link to="/">Home</Link>
           </div>
        );
    }
}
