import React, { useState } from "react";
import "../Styles/AllProducts.css";
import { SwapOutlined } from "@ant-design/icons";
import Card from "./Card";
import Sort from "./Sort";
import { useFilterContext } from "../Contexts/FilterContext";

export default function Sale() {
  const { filtered_products } = useFilterContext();
  const [filterOpen, setFilterOpen] = useState(false);

  const filterToggle = (value) => {
    setFilterOpen(value);
  };

  return (
    <main className="all-prod-wrapper">
      <div className="allp-upper">
        <h1>Sale</h1>
      </div>
      <div className="allp-lower">
        <div
          className="filter-btn"
          style={{ display: filterOpen ? "none" : "inline-block" }}
          onClick={() => filterToggle(true)}
        >
          <span>
            <SwapOutlined /> Filter & Sort
          </span>
        </div>
        <div
          className="allp-products"
          style={{ marginTop: filterOpen ? "0" : "-52px" }}
        >
          <div className={`allp-filters ${filterOpen ? "active" : ""}`}>
            <Sort filterToggle={filterToggle} filterType="ALL" />
          </div>
          <div className="allp-cards">
            <div className="product-grid">
              {filtered_products &&
                filtered_products.map((product) => {
                  return <Card key={product.id} {...product} />;
                })}
            </div>
          </div>
          {filtered_products.length === 0 && (
            <div className="no-products-message">
              <h1>No products with these Preferences</h1>
              <p>
                Use any other filter or Remove a filter to see Available
                Products
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
