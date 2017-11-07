import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Product, ProductCategory, ProductCategoryRestResponse, ProductRestResponse} from '../../../model/products.types';
import {Href} from '../../../model/common-types';

@Injectable()
export class ProductsService {

    constructor(private http: Http) {
    }

    loadProducts = (): Observable<Product[]> =>
        this.http.get('/api/rest/products')
            .map(response => response.json())
            .map(response => {
                const productResponses: Array<ProductRestResponse> = response._embedded.products;

                const productList: Array<Product> = productResponses.map(productResponse => {
                    const result: Product = {
                        id: productResponse._links.self.href,
                        name: productResponse.name,
                        description: productResponse.description,
                        image: productResponse.imageUrl,
                        price: productResponse.price,
                        categoryIds: []
                    };

                    if (productResponse._links.productCategories) {
                        result.categoryIds = productResponse._links.productCategories.map((link: Href) => link.href);
                    }

                    return result;
                });

                return productList;
            })


    loadProductCategories = (): Observable<ProductCategory[]> =>
        this.http.get('/api/rest/productCategories')
            .map(response => response.json())
            .map(response => {
                const productCategoryResponses: Array<ProductCategoryRestResponse> = response._embedded.productCategories;

                const categoryList: Array<ProductCategory> = productCategoryResponses.map(categoryResponse => {
                    return {
                        id: categoryResponse._links.self.href,
                        name: categoryResponse.name,
                    };
                });
                return categoryList;
            })

}
