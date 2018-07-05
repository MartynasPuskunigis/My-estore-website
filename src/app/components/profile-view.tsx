import * as React from "react";
import { Link } from "react-router-dom";

import { EStoreActionsCreators } from "./../actions/estone-actions-creators";

interface State {
    currentProductName: string;
    currentQuantity: number;
    currentCondition: string;
    currentMoreDetails: string;
    currentPrice: number;
}

export class ProfileView extends React.Component<{}, State> {
    public state: State = {
        currentProductName: "",
        currentQuantity: 1,
        currentCondition: "",
        currentMoreDetails: "",
        currentPrice: 0
    };

    protected onSubmitClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        EStoreActionsCreators.addProduct(
            this.state.currentProductName,
            this.state.currentQuantity,
            this.state.currentCondition,
            this.state.currentMoreDetails,
            this.state.currentPrice,
            "admin"
        );
    };

    protected handleNameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentProductName: event.target.value
        });
    }

    protected handleQuantityChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentQuantity: Number(event.target.value)
        });
    }

    protected handleConditionChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentCondition: event.target.value
        });
    }

    protected handleDetailsChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentMoreDetails: event.target.value
        });
    }

    protected handlePriceChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({
            currentPrice: Number(event.target.value)
        });
    }

    public render(): JSX.Element {
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
                </div>
                <Link to="/">Go to home page</Link>
            </div>
        );
    }
}
