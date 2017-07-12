import { ShoppingCartState } from '../shoppingcart.types';
import { Reducer } from 'redux';
import { tassign } from "tassign";
import { ShoppingCartActions, ShoppingCartAction} from './actions';

export const SHOPPINGCART_INITIAL_STATE: ShoppingCartState = {
    productsInCart: []
};

export const shoppingCartReducer: Reducer<ShoppingCartState> = (state = SHOPPINGCART_INITIAL_STATE, action: ShoppingCartAction) => {
    switch (action.type) {
        case ShoppingCartActions.ADD_ITEM_TO_SHOPPING_CART: {
            let productId = action.payload.id;
            if (state.productsInCart.includes(productId)) {
                return state;
            } else {
                return tassign(state, {
                    productsInCart: [...state.productsInCart, productId]
                })
            }
        }

        case ShoppingCartActions.REMOVE_ITEM_FROM_SHOPPING_CART: {
            let productId = action.payload.id;
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
};
