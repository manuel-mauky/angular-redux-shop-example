// @flow

import type {ShoppingCartState} from "./shopping-cart.types";
import {
    ADD_ITEM_TO_SHOPPING_CART,
    REMOVE_ITEM_FROM_SHOPPING_CART,
} from './action-types'
import type {
    AddItemToShoppingCartAction,
    RemoveItemFromShoppingCartAction
} from "./action-types";


export const initialState: ShoppingCartState = {
    productsInCart: []
}

type ShoppingCartAction =
    AddItemToShoppingCartAction |
    RemoveItemFromShoppingCartAction

export const ShoppingCartReducer = (state: ShoppingCartState = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM_TO_SHOPPING_CART: {
            let productId = action.payload.productId;

            if (state.productsInCart.includes(productId)) {
                return state;
            } else {
                return {
                    ...state,
                    productsInCart: [...state.productsInCart, productId]
                }
            }
        }

        case REMOVE_ITEM_FROM_SHOPPING_CART: {
            let productId = action.payload.productId;

            if (state.productsInCart.includes(productId)) {
                return {
                    ...state,
                    productsInCart: state.productsInCart.filter(id => id !== productId)
                }
            } else {
                return state;
            }
        }
        default: return state;
    }
}