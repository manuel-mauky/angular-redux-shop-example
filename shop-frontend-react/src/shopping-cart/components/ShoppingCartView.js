// @flow

import React from 'react'
import {Product} from "../../products/products.types";
import {productsInCart} from "../selectors";
import {removeItemFromShoppingCart} from "../action-creators";
import {connect} from "react-redux";

type Props = {
    products: Array<Product>,
    removeFromCart: (product: Product) => void,
}

const ShoppingCartView = (props: Props) => (
    <div>
        <h1>Shopping Cart</h1>


        <ul>
            {props.products.map(product => (
                <li>
                    <div>
                        <p>{product.name}</p>
                        <button onClick={() => props.removeFromCart(product)}>Remove</button>
                    </div>
                </li>
            ))}

        </ul>
    </div>
)

const mapStateToProps = state => ({
    products: productsInCart(state)
})

const mapDispatchToProps = dispatch => ({
    removeFromCart: (product) => {
        dispatch(removeItemFromShoppingCart(product))
    }
})

const ShoppingCartViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCartView)

export default ShoppingCartViewContainer