
import { AppState } from './model';
import { PRODUCTCOMPONENT_INITIALSTATE, productsComponentReducer } from '../products/api/reducer';
//import { shoppingCartInitialState, shoppingCartReducer } from '../shopping-cart/redux/reducer';
import { Reducer, combineReducers } from 'redux';
import { routerReducer } from "@angular-redux/router";


export const initialState: AppState = {
    productComponent: PRODUCTCOMPONENT_INITIALSTATE,
//    shoppingCart: shoppingCartInitialState,

}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    productComponent: productsComponentReducer,
 //   shoppingCart: shoppingCartReducer,
    router: routerReducer,
})
