
import { AppState } from './model';
import { PRODUCTCOMPONENT_INITIALSTATE, productsComponentReducer } from '../products/model/redux/api/reducer';
import { SHOPPINGCART_INITIAL_STATE, shoppingCartReducer } from '../shopping-cart/model/redux/reducer';
import { Reducer, combineReducers } from 'redux';
import { routerReducer } from "@angular-redux/router";


export const initialState: AppState = {
    productComponent: PRODUCTCOMPONENT_INITIALSTATE,
    shoppingCart: SHOPPINGCART_INITIAL_STATE
};

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    productComponent: productsComponentReducer,
    shoppingCart: shoppingCartReducer,
    router: routerReducer,
});
