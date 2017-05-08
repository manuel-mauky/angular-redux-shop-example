

import { ShoppingCartState } from '../types';
import { Reducer } from 'redux';
import { Action } from '@types/flux-standard-action';

export const shoppingCartInitialState: ShoppingCartState = {
    productsInCart: []
}

export const shoppingCartReducer: Reducer<ShoppingCartState> = (state = shoppingCartInitialState, action: Action<any>) => {

    return state;
}