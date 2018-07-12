import * as React from "react";
import { Link } from "react-router-dom";
import { EStoreActionsCreators } from "../../actions/estone-actions-creators";

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
    }

    private onPasswordInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentPasswordInput: event.target.value
        });
    }

    private onLogInClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        EStoreActionsCreators.logIn(this.state.currentUsernameInput, this.state.currentPasswordInput);
    }

    public render(): JSX.Element {
        return (
           <div>
               <div>This is the login page</div>
               <div className="login-form">
                <div className="login-form-header"></div>
                <div className="login-form-inputs">
                    <input onChange={this.onUsernameInputChange} type="text" placeholder="Username"/>
                    <input onChange={this.onPasswordInputChange} type="password" placeholder="Password"/>
                </div>
                <div className="login-form-submit">
                    <button onClick={this.onLogInClick}>Log in</button>
                </div>
               </div>
               <Link to="/">Go to home page</Link>
           </div>
        );
    }
}
