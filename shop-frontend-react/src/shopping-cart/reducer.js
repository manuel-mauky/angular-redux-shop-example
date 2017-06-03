// @flow

import type {ShoppingCartState} from "./shopping-cart.types";


export const initialState: ShoppingCartState = {
    productsInCart: []
}

export const ShoppingCartReducer = (state: ShoppingCartState = initialState, action: any) => {
    return state;
}