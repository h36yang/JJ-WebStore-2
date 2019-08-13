export class Product {

    id: number;
    name: string;
    longName: string;
    productNumber: string;
    ingredient: string;
    avatarId?: number;
    productImages?: ProductImage[];
    type: string;
    price: number;
    volume: string;
    origin: string;
    producer: string;
    highlight: string;
    description: string;
    functions: ProductFunction[];
}

export class ProductImage {

    id: number;
    name: string;
}

export class ProductFunction {

    summary: string;
    detail: string;
}
