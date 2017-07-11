

import { AppState } from "../../store/model";
import { Product } from "../../products/products.types";
import { ShoppingCartState } from "../types";
import { getProductsState } from "../../products/api/selectors";


export function getShoppingCartState(state: AppState): ShoppingCartState {
    //return state.shoppingCart;
    return {productsInCart: []};
}

export function productsInCart(state: AppState): Array<Product> {
    const productsState = getProductsState(state);
    const shoppingCartState = getShoppingCartState(state);

    const productIds = shoppingCartState.productsInCart;

    return productIds.map(id => productsState.entities[id])
}
