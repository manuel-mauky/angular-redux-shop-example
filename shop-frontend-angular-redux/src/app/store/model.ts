import {RouterState} from '@angular/router';
import {ProductCategoriesState, ProductsState} from '../products/store/api/reducer';
import {ShoppingCartState} from '../shopping-cart/store/reducer';

export type AppState = {
    productComponent: { products: ProductsState, productCategories: ProductCategoriesState }
    shoppingCart: ShoppingCartState,
    router?: RouterState,
};
