//import { ShoppingCartState } from '../shopping-cart/types';
import {ProductCategoriesState, ProductsState} from "../products/products.types";
import { RouterState } from '@angular/router';

export type AppState = {
    productComponent: {products: ProductsState, productCategories: ProductCategoriesState}
//    shoppingCart: ShoppingCartState,
    router?: RouterState,
}
