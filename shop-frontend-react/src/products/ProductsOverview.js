// @flow

import React from 'react'
import {Product, ProductWithFullCategories} from "./product.types";
import ProductListItem from "./ProductListItem";
import {connect} from "react-redux";

type Props = {
    products: Array<ProductWithFullCategories>,
    loading: boolean,
    addProductToCart: (product: Product) => void,
}

const ProductsOverview = (props: Props) => (
    <div>
        <h1>Products overview</h1>

        {props.products.map(product => (
            <ProductListItem
                product={product}
                addToCart={() => props.addProductToCart(product)}
            />
        ))}

        { props.loading || <p>Loading</p> }
    </div>
)


const mapStateToProps = (state) => {
    return {
        products: [],
        loading: false,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (product: Product) => {
            console.log("add product to cart")
        }
    }
}

const ProductsOverviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsOverview)

export default ProductsOverviewContainer