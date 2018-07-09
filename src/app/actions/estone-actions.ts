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
  constructor(
    private email: string,
    private nickname: string,
    private password: string,
    private country: string
  ) {}

  public get userEmailAddress(): string {
    return this.email;
  }

  public get username(): string {
    return this.nickname;
  }

  public get userPassword(): string {
    return this.password;
  }

  public get userCountry(): string {
    return this.country;
  }
}
