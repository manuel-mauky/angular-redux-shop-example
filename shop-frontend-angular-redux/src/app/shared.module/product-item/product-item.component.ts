import {Component, Input, OnInit} from '@angular/core'
import {ProductWithFullCategories} from '../../model/products.types'

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input()
    public product: ProductWithFullCategories;

    @Input()
    public collapsed = false;

    constructor() {
    }

    ngOnInit() {
    }

}
