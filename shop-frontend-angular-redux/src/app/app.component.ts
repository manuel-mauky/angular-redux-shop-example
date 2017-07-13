import { Component } from '@angular/core';
import {select} from "@angular-redux/store";
import {productsInCartCount} from "./shopping-cart/model/redux/selectors";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @select(productsInCartCount)
    public shoppingCartCount: Observable<number>;
}
