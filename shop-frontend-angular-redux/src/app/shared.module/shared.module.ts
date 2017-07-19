import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductItemComponent} from './product-item/product-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ProductItemComponent],
    declarations: [ProductItemComponent]
})
export class SharedModule {
}
