import {AppState} from './model';
import {PRODUCTCOMPONENT_INITIALSTATE, productsComponentReducer} from '../products/store/api/reducer';
import {SHOPPINGCART_INITIAL_STATE, shoppingCartReducer} from '../shopping-cart/store/reducer';
import {combineReducers, Reducer} from 'redux';
import {routerReducer} from '@angular-redux/router';


export const initialState: AppState = {
    productComponent: PRODUCTCOMPONENT_INITIALSTATE,
    shoppingCart: SHOPPINGCART_INITIAL_STATE
};

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    productComponent: productsComponentReducer,
    shoppingCart: shoppingCartReducer,
    router: routerReducer,
});
