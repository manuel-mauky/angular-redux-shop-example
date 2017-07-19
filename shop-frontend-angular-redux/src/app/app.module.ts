import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {StoreModule} from './store/module';
import {RoutingModule} from './routing.module';
import {GlobalErrorHandler} from './utils/globalerrorhandler';
import {SharedModule} from './shared.module/shared.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductsModule,
        RoutingModule,
        StoreModule
    ],
    providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
