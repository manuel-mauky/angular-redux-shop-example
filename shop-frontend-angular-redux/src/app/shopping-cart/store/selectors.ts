import {AppState} from '../../store/model';
import {Product} from '../../products/model/products.types';
import {getProductsState} from '../../products/store/api/selectors';
import {ShoppingCartState} from './reducer';


export function getShoppingCartState(state: AppState): ShoppingCartState {
    return state.shoppingCart;
}

export function productsInCart(state: AppState): Array<Product> {
    const productsState = getProductsState(state);
    const shoppingCartState = getShoppingCartState(state);

    const productIds = shoppingCartState.productsInCart;

    return productIds.map(id => productsState.entities[id]);
}

export function productsInCartCount(state: AppState): number {
    return productsInCart(state).length;
}
