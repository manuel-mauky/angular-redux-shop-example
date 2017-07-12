import { ShoppingCartState } from '../shopping-cart/model/shoppingcart.types';
import {ProductCategoriesState, ProductsState} from "../products/model/products.types";
import { RouterState } from '@angular/router';

export type AppState = {
    productComponent: {products: ProductsState, productCategories: ProductCategoriesState}
    shoppingCart: ShoppingCartState,
    router?: RouterState,
}
