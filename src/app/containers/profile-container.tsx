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
    allUsers: User[];
}

class ProfileContainerClass extends React.Component<Props, State> {
    public static getStores(): Container.StoresList {
        return [UsersReduceStore];
    }

    public static calculateState(state: State): State {
        return {
            currentUser: UsersReduceStore.getState().currentUser,
            allUsers: UsersReduceStore.getState().allUsers
        };
    }

    public componentDidMount(): void {
        this.props.onNewCurrentUser(UsersReduceStore.getState().currentUser);
    }

    public render(): JSX.Element {
        const productList = this.state.currentUser.productsOnSale.map(product => (
            <ProfileProductItemView key={`product-item-${product.id}`} product={product} userId={this.state.currentUser.id} />
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
