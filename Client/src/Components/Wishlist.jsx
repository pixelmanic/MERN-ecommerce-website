import React from "react";
import { useFilterContext } from "../Contexts/FilterContext";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../Styles/AllProducts.css";

export default function Wishlist() {
  const { wishlist_products } = useFilterContext();
  return (
    <main className="all-prod-wrapper">
      <div className="allp-upper">
        <h1>
          Wishlist{" "}
          {wishlist_products.length !== 0 && <span className="cart-num">{wishlist_products.length}</span>}
        </h1>
      </div>
      <div className="allp-lower">
        <div className="allp-products">
          <div className="allp-cards">
            <div className="product-grid">
              {wishlist_products &&
                wishlist_products.map((product) => {
                  return <Card key={product.id} {...product} />;
                })}
            </div>
          </div>
          {wishlist_products.length === 0 && (
            <div className="no-products-message">
              <h1>No products in Wishlist</h1>
              <p>
                Let's Shop
              </p>
              <Link to="/all-products" className="error-page-btn">Back to Shopping</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
