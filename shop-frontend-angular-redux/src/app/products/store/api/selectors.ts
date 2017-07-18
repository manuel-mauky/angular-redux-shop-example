import { AppState } from '../../../store/model';
import { Product, ProductWithFullCategories} from '../../model/products.types';
import  * as R from 'ramda';
import { IdMap } from '../../../model/common-types';
import {ProductCategoriesState, ProductsState} from "./reducer";

export function getProductsState(state: AppState): ProductsState {
    return state.productComponent.products;
}

export function getProcutCategoriesState(state: AppState): ProductCategoriesState {
    return state.productComponent.productCategories;
}


export function isLoading(state: AppState): boolean {
    return getProductsState(state).loading || getProcutCategoriesState(state).loading;
}


export function allProducts(state: AppState): Array<ProductWithFullCategories> {
    const products: IdMap<Product> = getProductsState(state).entities;
    const categories = getProcutCategoriesState(state).entities;

    return R.values(products).map(product => {
        let productWithCategories = {...product, categories:[]};

        product.categoryIds.map(id => {
            productWithCategories.categories.push(categories[id]);
        });

        return productWithCategories;
    });
}
