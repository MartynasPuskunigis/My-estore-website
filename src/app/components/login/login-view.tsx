import * as React from "react";
import { Link } from "react-router-dom";
import { EStoreActionsCreators } from "../../actions/estone-actions-creators";

import "./login-view-styles.css";

interface State {
    currentUsernameInput: string;
    currentPasswordInput: string;
}

export class LoginView extends React.Component<{}, State> {
    public state: State = {
        currentUsernameInput: "",
        currentPasswordInput: ""
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

    private onLogInClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        EStoreActionsCreators.logIn(this.state.currentUsernameInput, this.state.currentPasswordInput);
    };

    public render(): JSX.Element {
        return (
            <div className="login-page">
                <div className="login-form">
                    <div className="login-form-header">This is the log in page</div>
                    <div className="login-form-inputs">
                        <div className="login-form-input">
                            <input onChange={this.onUsernameInputChange} type="text" placeholder="Username" />
                        </div>
                        <div className="login-form-input">
                            <input onChange={this.onPasswordInputChange} type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="login-form-submit">
                        <button onClick={this.onLogInClick}>Log in</button>
                    </div>
                </div>
                <Link className="gohome-button" to="/">
                    Go to home page
                </Link>
            </div>
        );
    }
}
