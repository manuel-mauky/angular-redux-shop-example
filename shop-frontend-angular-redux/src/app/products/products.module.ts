import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductActions, ProductCategoryActions} from './api/actions';
import { ProductsService } from './api/service';
import {ProductComponentEpics} from './api/epics'
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import {StoreModule} from "../store/module";

@NgModule({
    imports: [
        CommonModule, StoreModule
    ],
    providers: [
        ProductsService, ProductActions, ProductCategoryActions, ProductComponentEpics
    ],
    exports: [
      ProductOverviewComponent
    ],
    declarations: [
        ProductOverviewComponent,
        ProductListItemComponent,
    ]
})
export class ProductsModule{
}
