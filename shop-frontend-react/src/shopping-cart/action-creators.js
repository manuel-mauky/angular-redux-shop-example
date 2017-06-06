// @flow

import {
    ADD_ITEM_TO_SHOPPING_CART,
    REMOVE_ITEM_FROM_SHOPPING_CART,
} from "./action-types";
import type {
    Product
} from "../products/products.types";


export const addItemToShoppingCart = (product: Product) => {
    return {
        type: ADD_ITEM_TO_SHOPPING_CART,
        payload: {
            productId: product.id
        }
    }
}

export const removeItemFromShoppingCart = (product: Product) => {
    return {
        type: REMOVE_ITEM_FROM_SHOPPING_CART,
        payload: {
            productId: product.id
        }
    }
}
