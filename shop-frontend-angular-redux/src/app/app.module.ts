import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { StoreModule } from './store.module';
import { RouterModule } from '@angular/router';
import { ProductOverviewComponent } from './products/components/product-overview/product-overview.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductsModule,
        StoreModule,
        RouterModule.forRoot([
            {path: '', component: ProductOverviewComponent}
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
