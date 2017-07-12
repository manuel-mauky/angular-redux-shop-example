import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { ShoppingCartViewComponent} from './components/shopping-cart-view/shopping-cart-view.component'

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'shoppingcart', component: ShoppingCartViewComponent },
        { path: '', component: ShoppingCartViewComponent }
    ])],
    exports: [RouterModule]
})
export class ShoppingCartRoutingModule {}
