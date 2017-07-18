import { Product, ProductCategory } from "../../products.types";
import {Reducer, combineReducers} from "redux";
import {
    ProductAction, ProductActions,
    ProductCategoryAction, ProductCategoryActions
} from "./actions";
import {assign}  from 'lodash';
import { arrayToIdMap } from '../../../../utils/common';
import {IdMap} from "../../../../model/common-types";

export type ProductsState = {
    entities: IdMap<Product>,
    loading: boolean
}

export type ProductCategoriesState = {
    entities: IdMap<ProductCategory>,
    loading: boolean
}

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

const productsReducer: Reducer<ProductsState> = (state: ProductsState = INITIAL_PRODUCTS_STATE, action: ProductAction) => {
    switch (action.type) {
        case ProductActions.LOAD_PRODUCTS: {
            let nextState = assign({}, state);
            nextState.loading = true;
            return nextState;
        }
        case ProductActions.LOAD_PRODUCTS_FAILED: {
            let nextState = assign({}, state);
            nextState.loading = false;
            return nextState;
        }
        case ProductActions.LOAD_PRODUCTS_SUCCEEDED: {
            let nextState = assign({}, state);
            const productList: Array<Product> = action.payload;
            const productsMap = arrayToIdMap(productList);
            nextState.loading = false;
            nextState.entities = productsMap;
            return nextState;
        }
    }

    return state;
};

const productsCategoriesReducer: Reducer<ProductCategoriesState> = (state: ProductCategoriesState = INITIAL_PRODUCTCATEGORIES_STATE, action: ProductCategoryAction) => {
    switch (action.type) {
        case ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_STARTED: {
            let nextState = assign({}, state);
            nextState.loading = true;
            return nextState;
        }
        case ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_FAILED: {
            let nextState = assign({}, state);
            nextState.loading = false;
            return nextState;
        }
        case ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_SUCCEEDED: {
            const productCategories: Array<ProductCategory> = action.payload;
            let categoryMap = arrayToIdMap(productCategories);
            let nextState = assign({}, state);
            nextState.loading = false;
            nextState.entities = categoryMap;
            return nextState;
        }
    }
    return state;
};

export const productsComponentReducer = combineReducers({
    products: productsReducer,
    productCategories: productsCategoriesReducer
});


