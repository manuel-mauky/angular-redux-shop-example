import {Product, ProductCategory} from "../../products.types";
import {Injectable} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {FluxStandardAction} from 'flux-standard-action';

export type ProductAPIAction = FluxStandardAction<Product[], any>;
export type ProductCategoryAPIAction = FluxStandardAction<ProductCategory[], any>;

@Injectable()
export class ProductActions {
    static readonly LOAD_PRODUCTS = "LOAD_PRODUCTS";
    static readonly LOAD_PRODUCTS_STARTED = 'LOAD_PRODUCTS_START';
    static readonly LOAD_PRODUCTS_SUCCEEDED = 'LOAD_PRODUCTS_SUCCEEDED';
    static readonly LOAD_PRODUCTS_FAILED = 'LOAD_PRODUCTS_FAILED';

    @dispatch()
    loadProducts = (): ProductAPIAction => ({
        type: ProductActions.LOAD_PRODUCTS,
        meta: null,
        payload: null
    });

    loadStarted = (): ProductAPIAction => ({
        type: ProductActions.LOAD_PRODUCTS_STARTED,
        meta: null,
        payload: null
    });

    loadSucceeded = (payload: Product[]): ProductAPIAction => ({
        type: ProductActions.LOAD_PRODUCTS_SUCCEEDED,
        meta: null,
        payload: payload
    });

    loadFailed = (error): ProductAPIAction => ({
        type: ProductActions.LOAD_PRODUCTS_FAILED,
        meta: null,
        payload: null,
        error
    });
}

@Injectable()
export class ProductCategoryActions {
    static readonly LOAD_PRODUCT_CATEGORIES = "LOAD_PRODUCT_CATEGORIES";
    static readonly LOAD_PRODUCT_CATEGORIES_STARTED = 'LOAD_PRODUCT_CATEGORIES_START';
    static readonly LOAD_PRODUCT_CATEGORIES_SUCCEEDED = 'LOAD_PRODUCT_CATEGORIES_SUCCEEDED';
    static readonly LOAD_PRODUCT_CATEGORIES_FAILED = 'LOAD_PRODUCT_CATEGORIES_FAILED';

    @dispatch()
    loadProductCategories = (): ProductCategoryAPIAction => ({
        type: ProductCategoryActions.LOAD_PRODUCT_CATEGORIES,
        meta: null,
        payload: null
    });

    loadStarted = (): ProductCategoryAPIAction => ({
        type: ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_STARTED,
        meta: null,
        payload: null
    });

    loadSucceeded = (payload: ProductCategory[]): ProductCategoryAPIAction => ({
        type: ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_SUCCEEDED,
        meta: null,
        payload: payload
    });

    loadFailed = (error): ProductCategoryAPIAction => ({
        type: ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_FAILED,
        meta: null,
        payload: null,
        error
    });
}

