import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductActions, ProductCategoryActions} from './store/api/actions';
import {ProductsService} from './store/api/service';
import {ProductComponentEpics} from './store/api/epics';
import {ProductOverviewComponent} from './components/product-overview/product-overview.component';
import {ProductListItemComponent} from './components/product-list-item/product-list-item.component';
import {ShoppingCartActions} from '../shopping-cart/store/actions';
import {ProductsRoutingModule} from './products.routing-modul';

@NgModule({
    imports: [
        CommonModule, ProductsRoutingModule
    ],
    providers: [
        ProductsService, ProductActions, ProductCategoryActions, ProductComponentEpics, ShoppingCartActions
    ],
    exports: [],
    declarations: [
        ProductOverviewComponent,
        ProductListItemComponent,
    ]
})
export class ProductsModule {
}
