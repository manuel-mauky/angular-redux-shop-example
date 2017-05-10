

import { AppState } from "../../appstate.types";
import { Product } from "../../products/products.types";
import { ShoppingCartState } from "../types";
import { getProductsState } from "../../products/redux/selectors";


export function getShoppingCartState(state: AppState): ShoppingCartState {
    return state.shoppingCart;
}

export function productsInCart(state: AppState): Array<Product> {
    const productsState = getProductsState(state);
    const shoppingCartState = getShoppingCartState(state);

    const productIds = shoppingCartState.productsInCart;

    return productIds.map(id => productsState.products[id])
}