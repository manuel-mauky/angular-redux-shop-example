

import { AppState } from "../../../store/model";
import { Product } from "../../../products/model/products.types";
import { ShoppingCartState } from "../shoppingcart.types";
import { getProductsState } from "../../../products/model/redux/api/selectors";


export function getShoppingCartState(state: AppState): ShoppingCartState {
    return state.shoppingCart;
}

export function productsInCart(state: AppState): Array<Product> {
    const productsState = getProductsState(state);
    const shoppingCartState = getShoppingCartState(state);

    const productIds = shoppingCartState.productsInCart;

    return productIds.map(id => productsState.entities[id])
}
