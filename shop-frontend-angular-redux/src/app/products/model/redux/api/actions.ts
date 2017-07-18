import {Product, ProductCategory} from "../../products.types";
import {Injectable} from '@angular/core';
import {dispatch} from '@angular-redux/store';

export class ProductAction implements Action<Product[]>{
    type: string;
    payload: Product[];
}

@Injectable()
export class ProductActions {
    static readonly LOAD_PRODUCTS = "LOAD_PRODUCTS";
    static readonly LOAD_PRODUCTS_STARTED = 'LOAD_PRODUCTS_START';
    static readonly LOAD_PRODUCTS_SUCCEEDED = 'LOAD_PRODUCTS_SUCCEEDED';
    static readonly LOAD_PRODUCTS_FAILED = 'LOAD_PRODUCTS_FAILED';

    @dispatch()
    loadProducts = (): ProductAction => ({
        type: ProductActions.LOAD_PRODUCTS,
        payload: null
    });

    loadStarted = (): ProductAction => ({
        type: ProductActions.LOAD_PRODUCTS_STARTED,
        payload: null
    });

    loadSucceeded = (payload: Product[]): ProductAction => ({
        type: ProductActions.LOAD_PRODUCTS_SUCCEEDED,
        payload: payload
    });

    loadFailed = (error): ProductAction => ({
        type: ProductActions.LOAD_PRODUCTS_FAILED,
        payload: null
    });
}

export class ProductCategoryAction implements Action<ProductCategory[]> {
    type: string;
    payload: ProductCategory[];
}

@Injectable()
export class ProductCategoryActions {
    static readonly LOAD_PRODUCT_CATEGORIES = "LOAD_PRODUCT_CATEGORIES";
    static readonly LOAD_PRODUCT_CATEGORIES_STARTED = 'LOAD_PRODUCT_CATEGORIES_START';
    static readonly LOAD_PRODUCT_CATEGORIES_SUCCEEDED = 'LOAD_PRODUCT_CATEGORIES_SUCCEEDED';
    static readonly LOAD_PRODUCT_CATEGORIES_FAILED = 'LOAD_PRODUCT_CATEGORIES_FAILED';

    @dispatch()
    loadProductCategories = (): ProductCategoryAction => ({
        type: ProductCategoryActions.LOAD_PRODUCT_CATEGORIES,
        payload: null
    });

    loadStarted = (): ProductCategoryAction => ({
        type: ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_STARTED,
        payload: null
    });

    loadSucceeded = (payload: ProductCategory[]): ProductCategoryAction => ({
        type: ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_SUCCEEDED,
        payload: payload
    });

    loadFailed = (error): ProductCategoryAction => ({
        type: ProductCategoryActions.LOAD_PRODUCT_CATEGORIES_FAILED,
        payload: null
    });
}

