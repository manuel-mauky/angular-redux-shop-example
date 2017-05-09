import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { StoreModule } from './store.module';
import { RouterModule } from '@angular/router';
import { ProductOverviewComponent } from './products/components/product-overview/product-overview.component';
import { ShoppingCartModule } from "./shopping-cart/shopping-cart.module";
import { ShoppingCartViewComponent } from "./shopping-cart/components/shopping-cart-view/shopping-cart-view.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductsModule,
        ShoppingCartModule,
        StoreModule,
        RouterModule.forRoot([
            {path: '', component: ProductOverviewComponent},
            {path: 'products', component: ProductOverviewComponent},
            {path: 'shoppingcart', component: ShoppingCartViewComponent}
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
