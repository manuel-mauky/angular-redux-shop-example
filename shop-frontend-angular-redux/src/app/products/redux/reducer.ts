import {
    ProductsState,
    ProductCategoryRestResponse,
    ProductRestResponse,
    Product
} from "../products.types";
import { Reducer } from "redux";
import {
    LOAD_PRODUCT_CATEGORIES_FINISHED, LOAD_PRODUCTS_FINISHED,
    LOAD_PRODUCTS_START, LOAD_PRODUCTS_FAILED, LOAD_PRODUCT_CATEGORIES_START, LOAD_PRODUCT_CATEGORIES_FAILED
} from "./action-creators.service";
import { tassign } from "tassign";
import { Href } from "../../common-types";
import { arrayToIdMap } from '../../common';
import {
    LoadProductsStartAction, LoadProductsFailedAction, LoadProductsFinishedAction,
    LoadProductCategoriesStartAction, LoadProductCategoriesFailedAction, LoadProductCategoriesFinishedAction
} from "./action-types";


export const productsInitialState: ProductsState = {
    productCategories: {},
    products: {},
    loadingProducts: false,
    loadingCategories: false
}

type ProductsAction =
    LoadProductsStartAction |
        LoadProductsFailedAction |
        LoadProductsFinishedAction |
        LoadProductCategoriesStartAction |
        LoadProductCategoriesFailedAction |
        LoadProductCategoriesFinishedAction

export const productsReducer: Reducer<ProductsState> = (state: ProductsState = productsInitialState, action: ProductsAction) => {
    switch (action.type) {
        case LOAD_PRODUCT_CATEGORIES_START: {
            return tassign(state, {
                loadingCategories: true
            })
        }

        case LOAD_PRODUCT_CATEGORIES_FAILED: {
            return tassign(state, {
                loadingCategories: false
            })
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

            return tassign(state, {
                productCategories: tassign(state.productCategories, categoryMap),
                loadingCategories: false,
            });
        }


        case LOAD_PRODUCTS_START: {
            return tassign(state, {
                loadingProducts: true
            })
        }

        case LOAD_PRODUCTS_FAILED: {
            return tassign(state, {
                loadingProducts: false
            })
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

            return tassign(state, {
                products: tassign(state.products, productsMap),
                loadingProducts: false,
            })
        }
    }

    return state;
}
