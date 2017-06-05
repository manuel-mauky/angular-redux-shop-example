// @flow

import {AppState} from "./appstate.types";
import {initialState as productsInitialState, ProductsReducer} from './products/reducer'
import {initialState as shoppingCartInitialState, ShoppingCartReducer} from './shopping-cart/reducer'
import {combineReducers} from "redux";


export const initialState: AppState = {
    products: productsInitialState,
    shoppingCart: shoppingCartInitialState,
}

export const rootReducer = combineReducers({
    products: ProductsReducer,
    shoppingCart: ShoppingCartReducer,
})