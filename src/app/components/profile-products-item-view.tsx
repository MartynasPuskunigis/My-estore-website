import * as React from "react";
import { Product } from "./../contracts/product";

// export type InputItemViewOnCheckboxClickedHandler = (taskId: number, isChecked: boolean) => void;

interface Props {
    product: Product;
    // onCheckboxClicked: InputItemViewOnCheckboxClickedHandler;
}

export class ProfileProductItemView extends React.Component<Props> {
    // protected onDeleteClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    //     this.props.onDeleteClicked(this.props.task.id);
    // }

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div>
                <div className="cell"><input type="checkbox"/></div>
                <div className="cell">{this.props.product.productName}</div>
                <div className="cell">{this.props.product.quantity}</div>
                <div className="cell">{this.props.product.condition}</div>
                <div className="cell">{this.props.product.moreDetails}</div>
                <div className="cell">{this.props.product.price}</div>
            </div>
        );
    }
}
