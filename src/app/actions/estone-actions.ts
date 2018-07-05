export class EStoreAddProduct {
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
