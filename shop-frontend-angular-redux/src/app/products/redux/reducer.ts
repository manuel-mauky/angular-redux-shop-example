import {
  ProductsState,
  ProductCategory,
  ProductCategoryRestResponse,
  ProductRestResponse,
  Product
} from "../products.types";
import {Reducer} from "redux/index";
import {LOAD_PRODUCT_CATEGORIES_FINISHED, LOAD_PRODUCTS_FINISHED} from "./action-creators.service";
import {Action} from "flux-standard-action";
import {tassign} from "tassign/lib/index";
import {Href} from "../../common-types";


export const defaultState: ProductsState = {
  productCategories: [],
  products: [],
}

export const productsReducer: Reducer<ProductsState> = (state: ProductsState = defaultState, action: Action) => {

  switch (action.type) {
    case LOAD_PRODUCT_CATEGORIES_FINISHED: {
      const json: Array<ProductCategoryRestResponse> = action.payload.json

      const categoryList = json.map(categoryJson => {
        let category: ProductCategory = {
          id: categoryJson._links.self.href,
          name: categoryJson.name,
        }

        return category
      })

      return tassign(state, {
        productCategories: [...state.productCategories, categoryList],
        loading: false,
      });
    }

    case LOAD_PRODUCTS_FINISHED: {
      const json: Array<ProductRestResponse> = action.payload.json

      const productList: Array<Product> = json.map(productJson => {
        let product:Product = {
          id: productJson._links.self.href,
          name: productJson.name,
          description: productJson.description,
          image: productJson.imageUrl,
          price: productJson.price,
          categories: productJson
              ._links.productCategories.map((link: Href) => link.href),
        };

        return product
      })

      return tassign(state, {
        products: [...state.products, productList]
      })
    }

  }
}
