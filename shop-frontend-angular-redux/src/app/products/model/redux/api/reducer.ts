import {
    ProductsState,
    Product, ProductCategory, ProductCategoriesState
} from "../../products.types";
import {Reducer, combineReducers} from "redux";
import {ProductActions, ProductAPIAction, ProductCategoryActions, ProductCategoryAPIAction} from "./actions";
import { tassign } from "tassign";
import { arrayToIdMap } from '../../../../common';

const INITIAL_PRODUCTS_STATE: ProductsState = {
    entities: {},
    loading: false
};

const INITIAL_PRODUCTCATEGORIES_STATE: ProductCategoriesState = {
    entities: {},
    loading: false
};

export const PRODUCTCOMPONENT_INITIALSTATE = {
    products: INITIAL_PRODUCTS_STATE,
    productCategories: INITIAL_PRODUCTCATEGORIES_STATE
};

const productsReducer: Reducer<ProductsState> = (state: ProductsState = INITIAL_PRODUCTS_STATE, action: ProductAPIAction) => {
    switch (action.type) {
        case ProductActions.LOAD_PRODUCTS_STARTED: {
            return tassign(state, {
                loading: true
            })
        }
        case ProductActions.LOAD_PRODUCTS_FAILED: {
            return tassign(state, {
                loading: false
            })
        }
        case ProductActions.LOAD_PRODUCTS_SUCCEEDED: {
            const productList: Array<Product> = action.payload;
            const productsMap = arrayToIdMap(productList);
            return tassign(state, {
                entities: tassign(state.entities, productsMap),
                loading: false,
            })
        }
    }

    return state;
};

const productsCategoriesReducer: Reducer<ProductCategoriesState> = (state: ProductCategoriesState = INITIAL_PRODUCTCATEGORIES_STATE, action: ProductCategoryAPIAction) => {
    switch (action.type) {
        case ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_STARTED: {
            return tassign(state, {
                loading: true
            })
        }
        case ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_FAILED: {
            return tassign(state, {
                loading: false
            })
        }
        case ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_SUCCEEDED: {
            const productCategories: Array<ProductCategory> = action.payload;
            let categoryMap = arrayToIdMap(productCategories);
            return tassign(state, {
                entities: tassign(state.entities, categoryMap),
                loading: false,
            });
        }
    }

    return state;
};

export const productsComponentReducer = combineReducers({
    products: productsReducer,
    productCategories: productsCategoriesReducer
});


