import { URI, ID } from '../common-types';

export type Product = {
    id: ID,
    name: string,
    description: string,
    image: URI,
    price: number,
    categories: Array<ID>,
}

export type ProductCategory = {
    id: ID,
    name: string,
}

export type ProductState = {
    products: Array<Product>,
    productCategories: Array<ProductCategory>,
}