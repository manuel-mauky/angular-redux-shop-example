// @flow

import type {ShoppingCartState} from "./shopping-cart.types";
import type {AppState} from "../appstate.types";
import type {Product} from "../products/products.types";
import {getProductsState} from "../products/selectors";


export function getShoppingCartState(state: AppState): ShoppingCartState {
    return state.shoppingCart;
}

export function productsInCart(state: AppState): Array<Product> {
    const productsState = getProductsState(state);
    const shoppingCartState = getShoppingCartState(state);

    const productIds = shoppingCartState.productsInCart;

    return productIds.map(id => productsState.products[id])
}