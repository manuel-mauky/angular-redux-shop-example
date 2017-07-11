import {ProductOverviewComponent} from './products/components/product-overview/product-overview.component';
//import {ShoppingCartViewComponent} from "./shopping-cart/components/shopping-cart-view/shopping-cart-view.component";

export const appRoutes = [
    {path: '', component: ProductOverviewComponent},
    {path: 'products', component: ProductOverviewComponent},
    //{path: 'shoppingcart', component: ShoppingCartViewComponent}
];
