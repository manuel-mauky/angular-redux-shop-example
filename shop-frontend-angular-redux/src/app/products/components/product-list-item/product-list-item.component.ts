import {Component, Input} from '@angular/core';
import {ProductWithFullCategories} from '../../model/products.types';
import {ShoppingCartActions} from '../../../shopping-cart/store/actions';

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {

    @Input()
    public product: ProductWithFullCategories;

    constructor(private shoppingCartActions: ShoppingCartActions) {
    }

    public addToCart(): void {
        this.shoppingCartActions.addItemToShoppingCart(this.product);
    }

}
