import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingCartViewComponent} from './components/shopping-cart-view/shopping-cart-view.component';
import {ShoppingCartActions} from './store/actions';
import {ShoppingCartRoutingModule} from './shopping-cart.routing-module';
import {SharedModule} from '../shared.module/shared.module'

@NgModule({
    imports: [
        CommonModule, ShoppingCartRoutingModule, SharedModule
    ],
    providers: [
        ShoppingCartActions,
    ],
    exports: [],
    declarations: [ShoppingCartViewComponent]
})
export class ShoppingCartModule {
}
