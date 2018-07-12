import * as React from "react";
import { Product } from "../../contracts/Product";
import { EStoreActionsCreators } from "../../actions/estone-actions-creators";

export type ProfileProductsItemViewOnDeleteProductClickedHandler = (taskId: number) => void;

interface Props {
    product: Product;
    userId: number;
}

export class ProfileProductItemView extends React.Component<Props> {
    private onDeleteProductClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        EStoreActionsCreators.deleteProduct(this.props.product.id, this.props.userId);
    }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div>
                <div className="cell">{this.props.product.productName}</div>
                <div className="cell">{this.props.product.quantity}</div>
                <div className="cell">{this.props.product.condition}</div>
                <div className="cell">{this.props.product.moreDetails}</div>
                <div className="cell">{this.props.product.price}</div>
                <div ><button onClick={this.onDeleteProductClick}>Remove</button></div>
            </div>
        );
    }
}
