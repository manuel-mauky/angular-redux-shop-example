import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Product } from "../../../products/products.types";
import { select } from "@angular-redux/store/lib/src/decorators/select";
import { productsInCart } from "../../redux/selectors";
import { ShoppingCartActionCreators } from "../../redux/action-creators.service";

@Component({
    selector: 'app-shopping-cart-view',
    templateUrl: './shopping-cart-view.component.html',
    styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent {

    @select(productsInCart)
    public products:Observable<Array<Product>>;

    constructor(private shoppingCartActionCreators:ShoppingCartActionCreators) {
    }

    public removeFromCart(product:Product) {
        this.shoppingCartActionCreators.removeItemFromShoppingCart(product);
    }
}
