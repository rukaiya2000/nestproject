export declare enum Rating {
    zero = "0",
    one = "1",
    two = "2",
    three = "3",
    four = "4",
    five = "5"
}
export declare class Products {
    productId: number;
    productName: string;
    productModel: string;
    availibility: number;
    rating: Rating;
    type: string;
    productPrice: number;
}
