import { Component, OnInit, Input } from '@angular/core';
import { ProductWithFullCategories } from "../../redux/selectors";

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

    @Input()
    public product: ProductWithFullCategories

    constructor() {
    }

    ngOnInit() {
    }

}
