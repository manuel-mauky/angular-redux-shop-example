import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

import { allProducts, isLoading } from '../../store/api/selectors'
import { ProductWithFullCategories } from "../../model/products.types";
import {ProductActions, ProductCategoryActions} from "../../store/api/actions";

@Component({
    selector: 'app-product-overview',
    templateUrl: './product-overview.component.html',
    styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit{

    @select(allProducts)
    public products: Observable<Array<ProductWithFullCategories>>

    @select(isLoading)
    public loading: Observable<boolean>

    constructor(private productActions: ProductActions, private productCategoriesActions: ProductCategoryActions) {
    }

    ngOnInit(): void {
        this.productActions.loadProducts();
        this.productCategoriesActions.loadProductCategories();
    }
}
