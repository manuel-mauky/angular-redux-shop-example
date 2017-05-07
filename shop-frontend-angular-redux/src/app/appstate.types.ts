import { ShoppingCartState } from './shopping-cart/types';
import {ProductsState} from "./products/products.types";

export type AppState = {
  products: ProductsState
  shoppingCart: ShoppingCartState
}
