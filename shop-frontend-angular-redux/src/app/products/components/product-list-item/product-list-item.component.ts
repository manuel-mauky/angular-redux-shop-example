import { Component, Input } from "@angular/core";
//import { ShoppingCartActionCreators } from "../../../shopping-cart/redux/action-creators.service";
import { ProductWithFullCategories } from "../../products.types";

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {

    @Input()
    public product:ProductWithFullCategories

    // constructor(private shoppingCartActionCreators:ShoppingCartActionCreators) {
    // }

    public addToCart():void {
//        this.shoppingCartActionCreators.addItemToShoppingCart(this.product);
    }

}
