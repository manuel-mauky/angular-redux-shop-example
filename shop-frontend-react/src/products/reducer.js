// @flow

import {ProductsState} from "./product.types";


export const initialState: ProductsState = {
    products: {},
    productCategories: {},
    loadingProducts: false,
    loadingCategories: false,
}

export const ProductsReducer = (state: ProductsState = initialState, action: any) => {
    return state;
}