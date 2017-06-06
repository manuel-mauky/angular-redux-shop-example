// @flow

import React from 'react'
import {ProductWithFullCategories} from "../products.types";

import './ProductListItem.css'

type Props = {
    product: ProductWithFullCategories,
    addToCart: () => void
}


const ProductListItem = (props: Props) => (
    <div className="panel panel-default root-container">
        <div className="panel-body">
            <h1>{props.product.name}</h1>

            <div className="content-container">
                <div>
                    <img alt="Product" src={props.product.image} className="product-image"/>
                </div>
                <div>
                    <p>{props.product.description}</p>
                    <p>Price: {props.product.price}</p>
                    <p> Categories:
                        {props.product.categories.map(category => (
                            <span key={category.id}>{category.name}</span>
                        ))}
                    </p>

                    <button onClick={e => props.addToCart()}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
)

export default ProductListItem