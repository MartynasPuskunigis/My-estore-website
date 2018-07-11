import * as React from "react";
import { Link } from "react-router-dom";

import { EStoreActionsCreators } from "./../actions/estone-actions-creators";
import { AppHistory } from "../router/app-history";

interface State {
    currentEmailInput: string;
    currentUsernameInput: string;
    currentPasswordInput: string;
    currentConfirmPasswordInput: string;
    currentCountryInput: string;
}

export class RegisterView extends React.Component<{}, State> {
    public state: State = {
        currentEmailInput: "",
        currentUsernameInput: "",
        currentPasswordInput: "",
        currentConfirmPasswordInput: "",
        currentCountryInput: ""
    };

    private onCreateAccountClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        if (this.state.currentPasswordInput === this.state.currentConfirmPasswordInput) {
            EStoreActionsCreators.addNewUser(
                this.state.currentEmailInput,
                this.state.currentUsernameInput,
                this.state.currentPasswordInput,
                this.state.currentCountryInput
            );
            AppHistory.push({pathname: "/"});
        } else {
            alert("Passwords don't match!");
        }
    };

    private onEmailInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentEmailInput: event.target.value
        });
    };

    private onUsernameInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentUsernameInput: event.target.value
        });
    };

    private onPasswordInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentPasswordInput: event.target.value
        });
    };

    private onConfirmPasswordInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentConfirmPasswordInput: event.target.value
        });
    };

    private onCountryInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentCountryInput: event.target.value
        });
    };

    public render(): JSX.Element {
        return (
            <div>
                <div>This is the registration page</div>
                <div className="register-form">
                    <div className="register-form-header" />
                    <div className="register-form-inputs">
                        <input onChange={this.onEmailInputChange} type="text" placeholder="Email" />
                        <input onChange={this.onUsernameInputChange} type="text" placeholder="Username" />
                        <input onChange={this.onPasswordInputChange} type="password" placeholder="Password" />
                        <input onChange={this.onConfirmPasswordInputChange} type="password" placeholder="Confirm password" />
                        <input onChange={this.onCountryInputChange} type="text" placeholder="Country" />
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
