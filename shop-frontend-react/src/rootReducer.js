// @flow

import {AppState} from "./AppState.types";
import { initialState as productsInitialState } from './products/reducer'
import { initialState as shoppingCartInitialState } from './shopping-cart/reducer'


export const initialState: AppState = {
    productState: productsInitialState,
    shoppingCartState: shoppingCartInitialState,
}

export const rootReducer = (state:any = initialState, action: any) => {
    return state;
}