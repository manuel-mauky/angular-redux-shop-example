
import { AppState } from './appstate.types';
import { productsInitialState, productsReducer } from './products/redux/reducer';
import { shoppingCartInitialState, shoppingCartReducer } from './shopping-cart/redux/reducer';
import { Reducer, combineReducers } from 'redux';


export const initialState: AppState = {
    products: productsInitialState,
    shoppingCart: shoppingCartInitialState,
}

export const appReducer: Reducer<AppState> = combineReducers<AppState>({
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
})
