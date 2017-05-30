import React from 'react'
import {NavLink} from "react-router-dom";


const Header = () => (
    <div className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-navbar"
                    aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand">Shoppy</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-navbar">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/products" activeClassName="nav-link">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/shopping-cart" activeClassName="nav-link">Shopping Cart</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;