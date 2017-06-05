// @flow

import type { AppState } from '../appstate.types';
import type { ProductsState, Product, ProductWithFullCategories } from './products.types';
import  * as R from 'ramda';
import type { IdMap } from '../common.types';

export const getProductsState = (state: AppState): ProductsState => state.products

export const isLoading = (state: AppState): boolean => {
    const productsState = getProductsState(state);

    return productsState.loadingCategories ||productsState.loadingProducts;
}


export const allProducts = (state: AppState): Array<ProductWithFullCategories> => {
    const productsState = getProductsState(state);

    let products: IdMap<Product> = productsState.products
    let categories = productsState.productCategories;


    return R.values(products).map(product => {
        let productCategories = product.categoryIds.map(id => categories[id])

        return {...product, categories: productCategories};
    });
}