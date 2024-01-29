import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home/AccesSection.css";

export default function AccesSection() {
  return (
    <section className="accessories-section">
      <div className="acces-card">
        <Link to="/homestories" className="acces-image-wrapper">
          <img
            className="acces-image"
            src="https://rino-pelle.com/cdn/shop/files/8E4A9096.jpg?v=1689673165"
            alt="home-accessories"
          />
          <div className="acces-content">
            <span className="acces-title">home stories</span>
            <h2>
              Cozy <span>home</span> accessories
            </h2>
            <span className="main-button">Discover now</span>
          </div>
        </Link>
      </div>
      <div className="acces-card">
        <Link to="/essentials" className="acces-image-wrapper">
          <img
            className="acces-image"
            src="https://rino-pelle.com/cdn/shop/files/RinoPelle_21Dec_220278319-copy.jpg?v=1689336773"
            alt="RTW-essentials"
          />
          <div className="acces-content">
            <span className="acces-title">ready to wear</span>
            <h2>
              Our <span>RTW</span> essentials
            </h2>
            <span className="main-button">Discover now</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
