import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsActionCreators } from './redux/action-creators.service';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ProductsActionCreators,
    ],
    exports: [
      ProductOverviewComponent
    ],
    declarations: [
        ProductOverviewComponent,
        ProductListItemComponent,
    ]
})
export class ProductsModule {
}
