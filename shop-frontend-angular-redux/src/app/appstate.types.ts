import { ShoppingCartState } from './shopping-cart/types';
import { ProductsState } from "./products/products.types";
import { RouterState } from '@angular/router';

export type AppState = {
    products: ProductsState
    shoppingCart: ShoppingCartState,
    router?: RouterState,
}
