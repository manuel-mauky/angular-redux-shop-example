import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProductActions, ProductCategoryActions} from './store/api/actions'
import {ProductsService} from './store/api/service'
import {ProductComponentEpics} from './store/api/epics'
import {ProductOverviewComponent} from './components/product-overview/product-overview.component'
import {ShoppingCartActions} from '../shopping-cart/store/actions'
import {ProductsRoutingModule} from './products.routing-modul'
import {SharedModule} from '../shared.module/shared.module'

@NgModule({
    imports: [
        CommonModule, ProductsRoutingModule, SharedModule
    ],
    providers: [
        ProductsService, ProductActions, ProductCategoryActions, ProductComponentEpics, ShoppingCartActions
    ],
    exports: [],
    declarations: [
        ProductOverviewComponent
    ]
})
export class ProductsModule {
}
