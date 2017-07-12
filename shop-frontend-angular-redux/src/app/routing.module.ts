import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const appRoutes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', redirectTo: 'products', pathMatch: 'full'},
    {path: 'shoppingcart', loadChildren: 'app/shopping-cart/shopping-cart.module#ShoppingCartModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class RoutingModule{}
