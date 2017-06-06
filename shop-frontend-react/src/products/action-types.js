// @flow

import {ProductCategoryRestResponse, ProductRestResponse} from "./products.types";

export const LOAD_PRODUCTS_START = 'LOAD_PRODUCTS_START';
export const LOAD_PRODUCTS_FINISHED = 'LOAD_PRODUCTS_FINISHED';
export const LOAD_PRODUCTS_FAILED = 'LOAD_PRODUCTS_FAILED';

export const LOAD_PRODUCT_CATEGORIES_START = 'LOAD_PRODUCT_CATEGORIES_START';
export const LOAD_PRODUCT_CATEGORIES_FINISHED = 'LOAD_PRODUCT_CATEGORIES_FINISHED';
export const LOAD_PRODUCT_CATEGORIES_FAILED = 'LOAD_PRODUCT_CATEGORIES_FAILED';

export type LoadProductsStartAction = {
    type: typeof LOAD_PRODUCTS_START
}

export type LoadProductsFinishedAction = {
    type: typeof LOAD_PRODUCTS_FINISHED,
    payload: {
        json: Array<ProductRestResponse>,
    }
}

export type LoadProductsFailedAction = {
    type: typeof LOAD_PRODUCTS_FAILED,
    payload: Error,
}



export type LoadProductCategoriesStartAction = {
    type: typeof LOAD_PRODUCT_CATEGORIES_START
}

export type LoadProductCategoriesFinishedAction = {
    type: typeof LOAD_PRODUCT_CATEGORIES_FINISHED,
    payload: {
        json: Array<ProductCategoryRestResponse>,
    }
}

export type LoadProductCategoriesFailedAction = {
    type: typeof LOAD_PRODUCT_CATEGORIES_FAILED,
    payload: Error,
}

