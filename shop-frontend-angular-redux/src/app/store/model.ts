import { RouterState } from '@angular/router';
import {ProductCategoriesState, ProductsState} from "../products/model/redux/api/reducer";
import {ShoppingCartState} from "../shopping-cart/model/redux/reducer";

export type AppState = {
    productComponent: {products: ProductsState, productCategories: ProductCategoriesState}
    shoppingCart: ShoppingCartState,
    router?: RouterState,
}
