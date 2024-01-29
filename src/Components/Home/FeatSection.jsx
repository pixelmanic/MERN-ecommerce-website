import React, { useState } from "react";
import "../../Styles/Home/ProductsSection.css";
import { Link } from "react-router-dom";
import {LoadingOutlined} from "@ant-design/icons";
import { useProductContext } from "../../Contexts/ProductsContext";
import Card from "../Card";

export default function FeatSection() {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div><LoadingOutlined /></div>;
  }

  return (
    <section className="products-section">
      <div className="products-header">
        <span>just in</span>
        <h1 className="product-title">New arrivals</h1>
        <Link to="/new" className="main-button-black">
          Discover now
        </Link>
      </div>
      <div className="products-row">
        {featureProducts &&
          featureProducts.slice(0, 4).map((product) => {
            return <Card key={product.id} {...product} />;
          })}
      </div>
    </section>
  );
}
