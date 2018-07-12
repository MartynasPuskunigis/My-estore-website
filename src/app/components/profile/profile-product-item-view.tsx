import * as React from "react";
import { Product } from "../../contracts/Product";

interface Props {
    product: Product;
}

export class ProductItemView extends React.Component<Props> {
    // protected onDeleteClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    //     this.props.onDeleteClicked(this.props.task.id);
    // }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div>
                <div className="cell">{this.props.product.productName}</div>
                <div className="cell">{this.props.product.quantity}</div>
                <div className="cell">{this.props.product.condition}</div>
                <div className="cell">{this.props.product.moreDetails}</div>
                <div className="cell">{this.props.product.price}</div>
                <div className="cell">{this.props.product.seller}</div>
                <div className="cell"><button>Remove</button></div>
            </div>
        );
    }
}
