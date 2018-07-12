import { User } from "./../contracts/User";
import { Product } from "../contracts/Product";

export class EStoreAddNewProductAction {
    constructor(private product: Product) {}

    public get productToAdd(): Product {
        return this.product;
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

export class EStoreLogOutAction {}

export class EStoreLogInAction {
    constructor(private nickname: string, private password: string) {}

    public get username(): string {
        return this.nickname;
    }

    public get userPassword(): string {
        return this.password;
    }
}

export class EStoreAddNewProductToUserAction {
    constructor(private newUserProduct: Product, private seller: User) {}

    public get productToAddToUser(): Product {
        return this.newUserProduct;
    }
    public get productSeller(): User {
        return this.seller;
    }
}

export class EStoreDeleteProductAction {
    constructor(private productId: number) {}

    public get productToDeleteId(): number {
        return this.productId;
    }
}

export class EStoreDeleteProductFromUserAction {
    constructor(private productId: number, private userId: number) {}

    public get productToDeleteId(): number {
        return this.productId;
    }

    public get userToDeleteFromId(): number {
        return this.userId;
    }
}

export class EStoreSearchUserInputAction {
    constructor(private input: string) {}

    public get userInput(): string {
        return this.input;
    }
}
