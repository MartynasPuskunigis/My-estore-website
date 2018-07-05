import * as React from "react";
import { Link } from "react-router-dom";

export class LoginView extends React.Component {

    public render(): JSX.Element {
        return (
           <div>
               <div>This is the login page</div>
               <div className="login-form">
                <div className="login-form-header"></div>
                <div className="login-form-inputs">
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="login-form-submit">
                    <button>Log in</button>
                </div>
               </div>
               <Link to="/">Go to home page</Link>
           </div>
        );
    }
}
