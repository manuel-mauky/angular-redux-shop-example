import React, { Component } from 'react';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ProductsOverview from "./products/components/ProductsOverview";
import ShoppingCartView from "./shopping-cart/components/ShoppingCartView";
import {Route, BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header />

              <div className="container">
                  <Route exact path="/" component={ProductsOverview} />
                  <Route path="/products" component={ProductsOverview} />
                  <Route path="/shopping-cart" component={ShoppingCartView} />
              </div>
          </div>
      </Router>
    )
  }
}

export default App;
