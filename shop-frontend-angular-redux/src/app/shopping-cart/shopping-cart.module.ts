import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartActionCreators } from './redux/action-creators.service';
import { ShoppingCartViewComponent } from './components/shopping-cart-view/shopping-cart-view.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ShoppingCartActionCreators,
    ],
    exports: [
        ShoppingCartViewComponent,
    ],
    declarations: [ShoppingCartViewComponent]
})
export class ShoppingCartModule {
}
