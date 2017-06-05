import { ShoppingCartState } from '../types';
import { Reducer } from 'redux';
import { tassign } from "tassign";
import {
    AddItemToShoppingCartAction, RemoveItemFromShoppingCartAction,
    ADD_ITEM_TO_SHOPPING_CART, REMOVE_ITEM_FROM_SHOPPING_CART
} from './action-types';

export const shoppingCartInitialState: ShoppingCartState = {
    productsInCart: []
}


type ShoppingCartAction =
    AddItemToShoppingCartAction |
    RemoveItemFromShoppingCartAction


export const shoppingCartReducer: Reducer<ShoppingCartState> = (state = shoppingCartInitialState, action: ShoppingCartAction) => {
    switch (action.type) {
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
    }

    return state;
}