
import { URI, ID, Href, IdMap } from '../common.types';


export type Product = {
    id: ID,
    name: string,
    description: string,
    image: URI,
    price: number,
    categoryIds: Array<ID>,
}

export type ProductCategory = {
    id: ID,
    name: string,
}


export type ProductWithFullCategories = Product & {
    categories: Array<ProductCategory>
}

export type ProductRestResponse = {
    name: string,
    description: string,
    imageUrl: URI,
    price: number,
    _links: {
        self: Href,
        product: Href,
        productCategories: Array<Href>,
        categories: Href
    }
}


export type ProductCategoryRestResponse = {
    name: string,
    _links: {
        self: Href,
        productCategory: Href,
        products: Href
    }
}

export type ProductsState = {
    products: IdMap<Product>,
    productCategories: IdMap<ProductCategory>,
    loadingProducts: boolean,
    loadingCategories: boolean,
}