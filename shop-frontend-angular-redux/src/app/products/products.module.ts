import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsActionCreators } from './redux/action-creators.service';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ProductsActionCreators,
    ],
    declarations: [ProductOverviewComponent]
})
export class ProductsModule {
}
