import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Error.css";

export default function Error() {
  return (
      <div className="error-page-wrapper">
        <div className="error-content-box">
          <h1>Page not found.</h1>
          <p>we can't seem to find the page you're looking for.</p>
          <Link to="/" className="error-page-btn">
            back to shopping
          </Link>
        </div>
      </div>
  );
}
