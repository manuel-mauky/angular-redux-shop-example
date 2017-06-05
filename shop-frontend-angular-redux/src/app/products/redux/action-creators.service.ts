import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../appstate.types';
import {
    LOAD_PRODUCT_CATEGORIES_FAILED,
    LOAD_PRODUCT_CATEGORIES_FINISHED,
    LOAD_PRODUCT_CATEGORIES_START,
    LOAD_PRODUCTS_FAILED,
    LOAD_PRODUCTS_FINISHED,
    LOAD_PRODUCTS_START
} from './action-types';

@Injectable()
export class ProductsActionCreators {

    constructor(private ngRedux: NgRedux<AppState>, private http: Http) {
    }

    public loadProducts() {
        this.ngRedux.dispatch({
            type: LOAD_PRODUCTS_START
        })

        this.http.get('/api/rest/products')
            .map(response => response.json())
            .subscribe((response: any) => {
                let json = response._embedded.products;

                this.ngRedux.dispatch({
                    type: LOAD_PRODUCTS_FINISHED,
                    payload: {
                        json
                    }
                })
            }, err => {
                this.ngRedux.dispatch({
                    type: LOAD_PRODUCTS_FAILED,
                    payload: err,
                    error: true
                })
            })
    }

    public loadProductCategories() {
        this.ngRedux.dispatch({
            type: LOAD_PRODUCT_CATEGORIES_START
        })

        this.http.get('/api/rest/productCategories')
            .map(response => response.json())
            .subscribe((response: any) => {
                let json = response._embedded.productCategories;

                this.ngRedux.dispatch({
                    type: LOAD_PRODUCT_CATEGORIES_FINISHED,
                    payload: {
                        json
                    }
                })
            }, err => {
                this.ngRedux.dispatch({
                    type: LOAD_PRODUCT_CATEGORIES_FAILED,
                    payload: err,
                    error: true
                })
            })
    }
}
