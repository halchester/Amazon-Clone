import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        ></img>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option__line1">Hello</span>
          <span className="header__option__line2">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option__line1">Return</span>
          <span className="header__option__line2">your orders</span>
        </div>
        <div className="header__option">
          <span className="header__option__line1">Your</span>
          <span className="header__option__line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__option__basket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header__option__line2 header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;