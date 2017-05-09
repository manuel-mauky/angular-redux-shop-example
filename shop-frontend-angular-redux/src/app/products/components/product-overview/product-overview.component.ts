import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../products.types';
import { select, NgRedux } from '@angular-redux/store';

import { allProducts, isLoading, ProductWithFullCategories } from '../../redux/selectors'
import { ProductsActionCreators } from '../../redux/action-creators.service';
import { AppState } from '../../../appstate.types';

@Component({
    selector: 'app-product-overview',
    templateUrl: './product-overview.component.html',
    styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

    @select(allProducts)
    public products: Observable<Array<ProductWithFullCategories>>

    @select(isLoading)
    public loading: Observable<boolean>

    constructor(private productsActionCreators: ProductsActionCreators) {
    }

    ngOnInit() {
        this.productsActionCreators.loadProductCategories();
        this.productsActionCreators.loadProducts();
    }

}
