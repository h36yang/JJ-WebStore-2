export class Product {

    id: string;
    name: string;
    longName: string;
    productNum: string;
    ingredient: string;
    avatar: string;
    images: string[];
    type: string;
    price: number;
    volume: string;
    origin: string;
    producer: string;
    highlight: string;
    desc: string;
    functions: ProductFunction[];
}

export class ProductFunction {

    summary: string;
    detail: string;
}
