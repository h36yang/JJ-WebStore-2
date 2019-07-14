export class Product {

    id: string;
    name: string;
    longName: string;
    productNumber: string;
    ingredient: string;
    avatarId?: number;
    productImageIds?: number[];
    type: string;
    price: number;
    volume: string;
    origin: string;
    producer: string;
    highlight: string;
    description: string;
    functions: ProductFunction[];
}

export class ProductFunction {

    summary: string;
    detail: string;
}
