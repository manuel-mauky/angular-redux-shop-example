import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductActions, ProductCategoryActions} from './model/redux/api/actions';
import { ProductsService } from './model/redux/api/service';
import {ProductComponentEpics} from './model/redux/api/epics'
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import {ShoppingCartActions} from "../shopping-cart/model/redux/actions";
import {ProductsRoutingModule} from "./products.routing-modul";

@NgModule({
    imports: [
        CommonModule, ProductsRoutingModule
    ],
    providers: [
        ProductsService, ProductActions, ProductCategoryActions, ProductComponentEpics, ShoppingCartActions
    ],
    exports: [
      //ProductOverviewComponent
    ],
    declarations: [
        ProductOverviewComponent,
        ProductListItemComponent,
    ]
})
export class ProductsModule{
}
