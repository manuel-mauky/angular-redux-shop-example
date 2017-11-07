import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductOverviewComponent} from './components/product-overview/product-overview.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'products', component: ProductOverviewComponent}
    ])],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
