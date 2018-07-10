import * as React from "react";
import { Product } from "./../contracts/product";

export type ProfileProductsItemViewOnDeleteProductClickedHandler = (taskId: number) => void;

interface Props {
    product: Product;
    onDeleteClicked: ProfileProductsItemViewOnDeleteProductClickedHandler;
}

export class ProfileProductItemView extends React.Component<Props> {
    private onDeleteProductClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        this.props.onDeleteClicked(this.props.product.id);
    }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div>
                <div className="cell">{this.props.product.productName}</div>
                <div className="cell">{this.props.product.quantity}</div>
                <div className="cell">{this.props.product.condition}</div>
                <div className="cell">{this.props.product.moreDetails}</div>
                <div className="cell">{this.props.product.price}</div>
                <div><button onClick={this.onDeleteProductClick}>Remove</button></div>
            </div>
        );
    }
}
