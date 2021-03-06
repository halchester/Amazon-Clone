import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    auth.signOut();
  };
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
        <Link to={!user && "/login"}  style = {{textDecoration: 'none'}}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option__line1">
              Hello,{user ? `${user.email}` : "Guest"}
            </span>
            <span className="header__option__line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to = '/orders' style = {{textDecoration:'none'}}>
        <div className="header__option">
          <span className="header__option__line1">Return</span>
          <span className="header__option__line2">&& orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__option__line1">Your</span>
          <span className="header__option__line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__option__basket">
            <ShoppingBasketIcon />
            <span className="header__option__line2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
