
import { ID } from '../../common-types';
export const ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART'
export const REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART'


export type AddItemToShoppingCartAction = {
    type: typeof ADD_ITEM_TO_SHOPPING_CART,
    payload: {
        productId: ID,
    }
}

export type RemoveItemFromShoppingCartAction = {
    type: typeof REMOVE_ITEM_FROM_SHOPPING_CART,
    payload: {
        productId: ID,
    }
}