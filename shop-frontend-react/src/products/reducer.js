// @flow

import type {Product, ProductCategoryRestResponse, ProductRestResponse, ProductsState} from "./products.types";
import type {
    LoadProductCategoriesFailedAction,
    LoadProductCategoriesFinishedAction,
    LoadProductCategoriesStartAction,
    LoadProductsFailedAction,
    LoadProductsFinishedAction,
    LoadProductsStartAction
} from "./action-types";
import {
    LOAD_PRODUCT_CATEGORIES_FAILED,
    LOAD_PRODUCT_CATEGORIES_FINISHED,
    LOAD_PRODUCT_CATEGORIES_START,
    LOAD_PRODUCTS_FAILED,
    LOAD_PRODUCTS_FINISHED,
    LOAD_PRODUCTS_START,
} from './action-types'
import {arrayToIdMap} from "../common";
import {Href} from "../common.types";


export const initialState: ProductsState = {
    products: {},
    productCategories: {},
    loadingProducts: false,
    loadingCategories: false,
}

type ProductsAction =
    LoadProductsStartAction |
    LoadProductsFailedAction |
    LoadProductsFinishedAction |
    LoadProductCategoriesStartAction |
    LoadProductCategoriesFailedAction |
    LoadProductCategoriesFinishedAction

export const ProductsReducer = (state: ProductsState = initialState, action: ProductsAction) => {
    switch(action.type) {
        case LOAD_PRODUCT_CATEGORIES_START: {
            return {
                ...state,
                loadingCategories: true
            }
        }

        case LOAD_PRODUCT_CATEGORIES_FAILED: {
            return {
                ...state,
                loadingCategories: false
            }
        }

        case LOAD_PRODUCT_CATEGORIES_FINISHED: {
            const json: Array<ProductCategoryRestResponse> = action.payload.json

            const categoryList = json.map(categoryJson => {
                return {
                    id: categoryJson._links.self.href,
                    name: categoryJson.name,
                }
            })

            let categoryMap = arrayToIdMap(categoryList)

            return {
                ...state,
                productCategories: {...state.productCategories, ...categoryMap} ,
                loadingCategories: false,
            }
        }


        case LOAD_PRODUCTS_START: {
            return {
                ...state,
                loadingProducts: true
            }
        }

        case LOAD_PRODUCTS_FAILED: {
            return {
                ...state,
                loadingProducts: false
            }
        }
        case LOAD_PRODUCTS_FINISHED: {
            const json: Array<ProductRestResponse> = action.payload.json

            const productList: Array<Product> = json.map(productJson => {
                let result: Product = {
                    id: productJson._links.self.href,
                    name: productJson.name,
                    description: productJson.description,
                    image: productJson.imageUrl,
                    price: productJson.price,
                    categoryIds: []
                }

                if (productJson._links.productCategories) {
                    result.categoryIds = productJson._links.productCategories.map((link: Href) => link.href);
                }

                return result;
            })

            const productsMap = arrayToIdMap(productList);

            return {
                ...state,
                products: {...state.products, ...productsMap},
                loadingProducts: false,
            }
        }

        default: return state
    }
}