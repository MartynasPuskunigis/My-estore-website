import * as React from "react";
import { Link } from "react-router-dom";

import { EStoreActionsCreators } from "./../actions/estone-actions-creators";

import { User } from "./../contracts/User";

import { loggedOutUser } from "./../stores/users-store";

import { ProfileContainer } from "../containers/profile-container";

import { ProfileContainerOnNewCurrentUserHandler } from "./../containers/profile-container";

interface State {
    currentProductName: string;
    currentQuantity: number;
    currentCondition: string;
    currentMoreDetails: string;
    currentPrice: number;
    currentUser: User;
}

export class ProfileView extends React.Component<{}, State> {
    public state: State = {
        currentProductName: "",
        currentQuantity: 1,
        currentCondition: "",
        currentMoreDetails: "",
        currentPrice: 0,
        currentUser: loggedOutUser
    };

    protected onSubmitClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        EStoreActionsCreators.addProductForSale(
            this.state.currentProductName,
            this.state.currentQuantity,
            this.state.currentCondition,
            this.state.currentMoreDetails,
            this.state.currentPrice,
            this.state.currentUser
        );
    };

    protected handleNameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentProductName: event.target.value
        });
    };

    protected handleQuantityChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentQuantity: Number(event.target.value)
        });
    };

    protected handleConditionChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentCondition: event.target.value
        });
    };

    protected handleDetailsChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentMoreDetails: event.target.value
        });
    };

    protected handlePriceChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentPrice: Number(event.target.value)
        });
    };

    protected onNewLogIn: ProfileContainerOnNewCurrentUserHandler = newCurrentUser => {
        this.setState({
            currentUser: newCurrentUser
        });
    };

    public render(): JSX.Element {
        if (this.state.currentUser.username !== "noUser") {
            return (
                <div>
                    <div>Your profile</div>
                    <div className="new-product-form">
                        <div className="new-product-form-header">To add a new product, fill the form below</div>
                        <div className="new-product-form-inputs">
                            <input onChange={this.handleNameChange} type="text" placeholder="Product name" />
                            <input onChange={this.handleQuantityChange} type="number" placeholder="Quantity" />
                            <input onChange={this.handleConditionChange} type="text" placeholder="Condition" />
                            <input onChange={this.handleDetailsChange} type="text" placeholder="More details" />
                            <input onChange={this.handlePriceChange} type="number" placeholder="Price" />
                        </div>
                        <div>
                            <button onClick={this.onSubmitClick}>Submit</button>
                        </div>
                        <ProfileContainer onNewCurrentUser={this.onNewLogIn} />
                    </div>
                    <Link to="/">Go to home page</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <div>You're not suppose to be here!</div>
                    <Link to="/">Go to home page</Link>
                </div>
            );
        }
    }
}
