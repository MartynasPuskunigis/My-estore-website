import * as React from "react";
import { Link } from "react-router-dom";

export class RegisterView extends React.Component {

    public render(): JSX.Element {
        return (
           <div><div>This is the registration page</div>
           <div className="register-form">
               <div className="register-form-header"></div>
               <div className="register-form-inputs">
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm password"/>
                <input type="text" placeholder="Country"/>
               </div>
               <div className="register-form-submit">
                <button>Create account</button>
               </div>
           </div>
            <Link to="/">Go to home page</Link>
           </div>
        );
    }
}
