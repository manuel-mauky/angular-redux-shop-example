import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Product} from '../../../model/products.types';
import {select} from '@angular-redux/store/lib/src/decorators/select';
import {productsInCart} from '../../store/selectors';
import {ShoppingCartActions} from '../../store/actions';

@Component({
    selector: 'app-shopping-cart-view',
    templateUrl: './shopping-cart-view.component.html',
    styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent {

    @select(productsInCart)
    public products: Observable<Array<Product>>;

    constructor(private shoppingCartActions: ShoppingCartActions) {
        console.log('Shopping-Cart Component created');
    }

    public removeFromCart(product: Product) {
        this.shoppingCartActions.removeItemFromShoppingCart(product);
    }
}
