import * as React from "react";
import { Product } from "../../contracts/Product";

// export type InputItemViewOnCheckboxClickedHandler = (taskId: number, isChecked: boolean) => void;

interface Props {
    product: Product;
    // onCheckboxClicked: InputItemViewOnCheckboxClickedHandler;
}

export class ProductItemView extends React.Component<Props> {
    // protected onDeleteClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    //     this.props.onDeleteClicked(this.props.task.id);
    // }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="product-list-item-row">
                <div className="product-list-item-cell">{this.props.product.productName}</div>
                <div className="product-list-item-cell">{this.props.product.quantity}</div>
                <div className="product-list-item-cell">{this.props.product.condition}</div>
                <div className="product-list-item-cell">{this.props.product.moreDetails}</div>
                <div className="product-list-item-cell">{this.props.product.price}</div>
                <div className="product-list-item-cell">{this.props.product.seller}</div>
                <div className="product-list-item-cell"><button>Add to cart</button></div>
            </div>
        );
    }
}
