import { User } from "./../contracts/User";

export class EStoreAddNewProductAction {
    constructor(
        private productName: string,
        private quantity: number,
        private productCondition: string,
        private details: string,
        private productPrice: number,
        private seller: string
    ) {}

    public get name(): string {
        return this.productName;
    }

    public get amount(): number {
        return this.quantity;
    }

    public get condition(): string {
        return this.productCondition;
    }

    public get moreDetails(): string {
        return this.details;
    }

    public get price(): number {
        return this.productPrice;
    }

    public get sellerUsername(): string {
        return this.seller;
    }
}

export class EStoreAddNewUserAction {
    constructor(private user: User) {}

    public get newUser(): User {
        return this.user;
    }
}

export class EStoreChangeCurrentUserAction {
    constructor(private newUser: User) {}

    public get newCurrentUser(): User {
        return this.newUser;
    }
}
