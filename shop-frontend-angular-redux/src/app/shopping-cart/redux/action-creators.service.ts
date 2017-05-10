import { Injectable } from '@angular/core';
import { Product } from "../../products/products.types";
import { AppState } from "../../appstate.types";
import { NgRedux } from "@angular-redux/store/lib/src/components/ng-redux";


export const ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART'
export const REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART'

@Injectable()
export class ShoppingCartActionCreators {

    constructor(private ngRedux: NgRedux<AppState>) {
    }

    public addItemToShoppingCart(product: Product) {
        this.ngRedux.dispatch({
            type: ADD_ITEM_TO_SHOPPING_CART,
            payload: {
                productId: product.id
            }
        })
    }

    public removeItemFromShoppingCart(product: Product) {
        this.ngRedux.dispatch({
            type: REMOVE_ITEM_FROM_SHOPPING_CART,
            payload: {
                productId: product.id
            }
        })
    }

}
