

import { AppState } from '../../appstate.types';
import { ProductsState, Product, ProductCategory } from '../products.types';
import  * as R from 'ramda';
import { IdMap } from '../../common-types';

export function getProductsState(state: AppState): ProductsState {
    return state.products;
}


export function isLoading(state: AppState): boolean {
    const productsState = getProductsState(state);

    return productsState.loadingCategories ||productsState.loadingProducts;
}


export type ProductWithFullCategories = Product & {
    categories: Array<ProductCategory>
}

export function allProducts(state: AppState): Array<ProductWithFullCategories> {
    const productsState = getProductsState(state);

    let products: IdMap<Product> = productsState.products
    let categories = productsState.productCategories;


    return R.values(products).map(product => {
        let productWithCategories:ProductWithFullCategories = {...product, categories: []};

        product.categoryIds.map(id => {
            productWithCategories.categories.push(categories[id]);
        })

        return productWithCategories;
    });
}