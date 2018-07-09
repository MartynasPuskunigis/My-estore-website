import * as React from "react";
import { Link } from "react-router-dom";

import { EStoreActionsCreators } from "./../actions/estone-actions-creators";

interface State {
    currentEmailInput: string;
    currentUsernameInput: string;
    currentPasswordInput: string;
    currentConfirmPasswordInput: string;
    currentCountry: string;
}

export class RegisterView extends React.Component<{}, State> {
    public state: State = {
        currentEmailInput: "",
        currentUsernameInput: "",
        currentPasswordInput: "",
        currentConfirmPasswordInput: "",
        currentCountry: ""
    };

    private onCreateAccountClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        if (this.state.currentPasswordInput === this.state.currentConfirmPasswordInput) {
            EStoreActionsCreators.addNewUser(
                this.state.currentEmailInput,
                this.state.currentUsernameInput,
                this.state.currentPasswordInput,
                this.state.currentCountry
            );
        } else {
            alert("Passwords don't match!");
        }
    };

    public render(): JSX.Element {
        return (
            <div>
                <div>This is the registration page</div>
                <div className="register-form">
                    <div className="register-form-header" />
                    <div className="register-form-inputs">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm password" />
                        <input type="text" placeholder="Country" />
                    </div>
                    <div className="register-form-submit">
                        <button onClick={this.onCreateAccountClick}>Create account</button>
                    </div>
                </div>
                <Link to="/">Go to home page</Link>
            </div>
        );
    }
}
