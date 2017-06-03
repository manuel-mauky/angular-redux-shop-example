import {ProductsState} from "./products/product.types";
import {ShoppingCartState} from "./shopping-cart/shopping-cart.types";

export type AppState = {
    products: ProductsState,
    shoppingCart: ShoppingCartState,
}