// @flow

import React from 'react'
import {Product, ProductWithFullCategories} from "../products.types";
import ProductListItem from "./ProductListItem";
import {connect} from "react-redux";
import {allProducts, isLoading} from "../selectors";
import {loadProductCategories, loadProducts} from "../action-creators";
import {addItemToShoppingCart} from "../../shopping-cart/action-creators";

type Props = {
    products: Array<ProductWithFullCategories>,
    loading: boolean,
    addProductToCart: (product: Product) => void,
    init: () => void,
}

class ProductsOverview extends React.Component {

    props: Props

    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <h1>Products overview</h1>

                {this.props.products.map(product => (
                    <ProductListItem
                        product={product}
                        addToCart={() => this.props.addProductToCart(product)}
                    />
                ))}

                { this.props.loading || <p>Loading</p> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: allProducts(state),
        loading: isLoading(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(loadProductCategories());
            dispatch(loadProducts());
        },
        addProductToCart: (product: Product) => {
            dispatch(addItemToShoppingCart(product))
        }
    }
}

const ProductsOverviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsOverview)

export default ProductsOverviewContainer