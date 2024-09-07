import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home/LookbookSection.css"

export default function LookbookSection() {
  return (
    <section className="lookbook-section">
      <Link to="/lookbook" className="lookbook-box">
        <img
          src="https://rino-pelle.com/cdn/shop/files/HIGH-TIDES.jpg?v=1708416110"
          alt="Explore Lookbook"
        />
        <div className="lookbook-content">
          <span>autumn winter 2023</span>
          <h1 className="lookbook-title">
            Explore the <span>latest</span> lookbook
          </h1>
          <Link to='/lookbook' className="main-button">Discover now</Link>
        </div>
      </Link>
    </section>
  );
}
