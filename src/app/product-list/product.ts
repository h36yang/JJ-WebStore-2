export class Product {

    id: string;
    name: string;
    longName: string;
    productNumber: string;
    ingredient: string;
    avatarImageId?: number;
    productImageIds?: number[];
    type: string;
    price: number;
    volume: string;
    origin: string;
    producer: string;
    highlight: string;
    description: string;
    productFunction: ProductFunction[];
}

export class ProductFunction {

    summary: string;
    detail: string;
}
