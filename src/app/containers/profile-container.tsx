import * as React from "react";
import { Container } from "flux/utils";

//import { EStoreActionsCreators } from "./../actions/estone-actions-creators";

import { User } from "./../contracts/User";

import { UsersReduceStore } from "./../stores/users-store";

import { ProfileProductItemView } from "./../components/profile-products-item-view";

export type ProfileContainerOnNewCurrentUserHandler = (currentUser: User) => void;

interface Props {
    onNewCurrentUser: ProfileContainerOnNewCurrentUserHandler;
}

interface State {
    currentUser: User;
}

class ProfileContainerClass extends React.Component<Props, State> {
    public static getStores(): Container.StoresList {
        return [UsersReduceStore];
    }

    public static calculateState(state: State): State {
        return {
            currentUser: UsersReduceStore.getState().currentUser
        };
    }

    // public componentDidUpdate(): void {
    //     console.log("byb");
    //     this.props.onNewCurrentUser(UsersReduceStore.getState().currentUser);
    // }

    public render(): JSX.Element {
        console.log(this.state.currentUser.productsOnSale);
        const productList = this.state.currentUser.productsOnSale.map(product => (
            <ProfileProductItemView key={`product-item-${product.id}`} product={product} />
        ));
        return (
            <div>
                <div> Your posted products on sale: </div>
                {this.state.currentUser.productsOnSale.length !== 0 ? (
                    <div>{productList}</div>
                ) : (
                    <div>You currently have no products on sale</div>
                )}
            </div>
        );
    }
}

export const ProfileContainer = Container.create(ProfileContainerClass);
