

import { ShoppingCartState } from '../types';
import { Reducer } from 'redux';
import { Action } from '@types/flux-standard-action';
import { ADD_ITEM_TO_SHOPPING_CART, REMOVE_ITEM_FROM_SHOPPING_CART } from "./action-creators.service";
import { tassign } from "tassign/lib/index";

export const shoppingCartInitialState: ShoppingCartState = {
    productsInCart: []
}

export const shoppingCartReducer: Reducer<ShoppingCartState> = (state = shoppingCartInitialState, action: Action<any>) => {
    switch(action.type) {
        case ADD_ITEM_TO_SHOPPING_CART: {
            let productId = action.payload.productId;

            if (state.productsInCart.includes(productId)) {
                return state;
            } else {
                return tassign(state, {
                    productsInCart: [...state.productsInCart, productId]
                })
            }
        }

        case REMOVE_ITEM_FROM_SHOPPING_CART: {
            let productId = action.payload.productId;

            if (state.productsInCart.includes(productId)) {
                return tassign(state, {
                    productsInCart: state.productsInCart.filter(id => id != productId)
                })
            } else {
                return state;
            }
        }

        default: return state;
    }
}