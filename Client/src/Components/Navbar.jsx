import React, { useEffect, useState } from "react";
import logo from "../Images/logo black.webp";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import {
  ShoppingOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Cart from "./Cart";
import { useCartContext } from "../Contexts/cartContext";
import Search from "./Search";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { totalItem } = useCartContext();

  const location = useLocation();
  function menuToggle(e) {
    setMenuOpen(!isMenuOpen);
    setSearchOpen(false);
  }

  const menuDrawerStyle = {
    transform: isMenuOpen ? "translate(0%)" : "translate(-110%)",
  };

  // button Active Logic 👇

  useEffect(() => {
    // Update activePage when the location changes
    setIsActive(location.pathname.substring(1));
  }, [location.pathname]);

  // Search Logic 👇

  function searchToggle() {
    setSearchOpen(!isSearchOpen);
    setMenuOpen(false);
  }

  const searchOpen = {
    display: isSearchOpen ? "block" : "none",
  };

  // Cart Section Logic 👇

  const cartToggle = () => {
    setIsCartOpen(!isCartOpen);
    setSearchOpen(false);
    setMenuOpen(false);
  };

  const cartDrawerStyle = {
    transform: !isCartOpen ? "translate(100%)" : "translate(0%)",
  };

  return (
    <>
      <header className="header">
        <div className="announcment-bar">
          <Link to="/sale" className="announcment-text">
            Winter Sale // Save up to 50%
          </Link>
        </div>
        <nav>
          <div className="logo-div">
            <Link to="/">
              <img src={logo} alt="pixel manic" />
            </Link>
          </div>
          <div className="nav-middle-div">
            <Link
              to="/sale"
              className={`nav-btns nav-sale-btn ${
                isActive === "sale" ? "active" : ""
              }`}
            >
              Sale
            </Link>

            <Link
              to="/new"
              className={`nav-btns ${isActive === "new" ? "active" : ""}`}
            >
              New arrivals
            </Link>
            <div className="nav-shop-box">
              <Link
                to="/all-products"
                className={`nav-btns ${
                  isActive === "all-products" ? "active" : ""
                }`}
                id="nav-shop-btn"
              >
                Shop
              </Link>
              <div className="megamenu">
                <div className="megamenu-content">
                  <h4>featured</h4>
                  <ul>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Bestsellers SS24
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Autumn Winter
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Keila coats
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Home stories
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="megamenu-content">
                  <h4>clothing</h4>
                  <ul>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        All Clothing
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Coats
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Jackets
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Waistcoats
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Sweaters & Cardigans
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Dresses
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Tops & Blouses
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Trousers & Shorts
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="megamenu-content">
                  <h4>accessories</h4>
                  <ul>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        All Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Bags
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Gloves
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Hats
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Scarves
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="megamenu-btns">
                        Giftcards
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link
              to="/lookbook"
              className={`nav-btns ${isActive === "lookbook" ? "active" : ""}`}
            >
              Lookbook
            </Link>

            <Link
              to="/about"
              className={`nav-btns ${isActive === "about" ? "active" : ""}`}
            >
              About
            </Link>

            <Link
              to="/blog"
              className={`nav-btns ${isActive === "blog" ? "active" : ""}`}
            >
              Blog
            </Link>
          </div>
          <div className="nav-third-div">
            <span className="nav-third-btns" onClick={searchToggle}>
              Search
            </span>
            <Link to="/wishlist" className="nav-third-btns">
              Wishlist
            </Link>
            {isAuthenticated ? (
              <img className="account" src={user.picture} alt="" />
            ) : (
              <span
                onClick={() => loginWithRedirect()}
                className="nav-third-btns"
              >
                Log In
              </span>
            )}
            {isAuthenticated && (
              <span
                className="nav-third-btns"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </span>
            )}
            <span className="nav-third-btns" onClick={cartToggle}>
              Cart
              {totalItem !== 0 && <span className="cart-num">{totalItem}</span>}
            </span>
            <span
              className="nav-third-btns shop-cart-icon"
              onClick={cartToggle}
            >
              <ShoppingOutlined
                style={{ fontSize: "20px", cursor: "pointer" }}
              />
            </span>
            <div onClick={menuToggle} className="menu-btn nav-third-btns">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        <Search searchOpen={searchOpen} searchToggle={searchToggle} />
      </header>
      <Cart cartDrawerStyle={cartDrawerStyle} cartToggle={cartToggle} />
      <div className="menu-drawer" style={menuDrawerStyle}>
        <div className="menu-top">
          <img className="menu-logo" src={logo} alt="brand-logo" />
          <span onClick={menuToggle}>
            <CloseOutlined style={{ cursor: "pointer" }} />
          </span>
        </div>
        <div className="menu-navigations">
          <div className="menu-middle">
            <Link to="/sale" className="menu-btns nav-sale-btn">
              Sale
            </Link>
            <Link to="/new" className="menu-btns">
              New arrival
            </Link>
            <Link to="/shop" className="menu-btns">
              Shop
            </Link>
            <Link to="/lookbook" className="menu-btns">
              Lookbook
            </Link>
            <Link to="/about" className="menu-btns">
              About
            </Link>
            <Link to="/blog" className="menu-btns">
              Blog
            </Link>
          </div>
          <ul className="menu-bottom">
            <li onClick={searchToggle} className="menu-last-btns">
              <SearchOutlined style={{ fontSize: "16px" }} />
              <span style={{ paddingLeft: "10px" }}>Search</span>
            </li>
            <li>
              <Link to="/wishlist" className="menu-last-btns">
                wishlist
              </Link>
            </li>
            <li>
              <Link to="/sign-in" className="menu-last-btns">
                sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`box-overlay ${isSearchOpen ? "search-open" : ""}`}
        onClick={searchToggle}
      ></div>
      <div
        className={`drawer-overlay ${isMenuOpen ? "drawer-open" : ""}`}
        onClick={menuToggle}
      ></div>
      <div
        className={`cart-overlay ${isCartOpen ? "cart-open" : ""}`}
        onClick={cartToggle}
      ></div>
    </>
  );
}
