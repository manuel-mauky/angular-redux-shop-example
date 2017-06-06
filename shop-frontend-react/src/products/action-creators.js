import {
    LOAD_PRODUCT_CATEGORIES_FAILED,
    LOAD_PRODUCT_CATEGORIES_FINISHED,
    LOAD_PRODUCT_CATEGORIES_START,
    LOAD_PRODUCTS_FAILED,
    LOAD_PRODUCTS_FINISHED,
    LOAD_PRODUCTS_START
} from "./action-types";

export const loadProducts = () => dispatch => {
    dispatch({
        type: LOAD_PRODUCTS_START
    })

    fetch('/api/rest/products')
        .then(response => response.json())
        .then(response => {
            let json = response._embedded.products

            dispatch({
                type: LOAD_PRODUCTS_FINISHED,
                payload: {
                    json
                }
            })

        }).catch(err => {
            console.log("products err", err)
            dispatch({
                type: LOAD_PRODUCTS_FAILED,
                payload: err,
                error: true,
            })
        })
}

export const loadProductCategories = () => dispatch => {
    dispatch({
        type: LOAD_PRODUCT_CATEGORIES_START,
    })

    fetch('/api/rest/productCategories')
        .then(response => response.json())
        .then(response => {
            console.log("categories response:", response)
            let json = response._embedded.productCategories

            dispatch({
                type: LOAD_PRODUCT_CATEGORIES_FINISHED,
                payload: {
                    json
                }
            })
        }).catch(err => {
            console.log("categories err", err)
            dispatch({
                type: LOAD_PRODUCT_CATEGORIES_FAILED,
                payload: err,
                error: true
            })
        })
}