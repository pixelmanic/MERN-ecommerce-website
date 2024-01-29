import React, {useState} from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import '../Styles/Card.css'

export default function Card(product) {
    const {id , title, price, prevprice, images, sizes, colours} = product;
  const [isWishListed, setWishListed] = useState(false);

    const wishListToggle = () => {
        setWishListed(!isWishListed);
      };
    
      const wishListStyle = { display: isWishListed ? "none" : "block" };
      const wishListedStyle = { display: !isWishListed ? "none" : "block" };

  return (
    <div key={id} className="product-card">
      <div className="grid-imagebox">
        <Link to={`/products/${id}`}>
          <div className="product-images">
            <img src={images[0]} alt="winter-sale" />
            <img
              className="grid-second-image"
              src={images[1]}
              alt="winter-sale"
            />
          </div>
        </Link>
        <div className="sale-badge">
          <span>sale</span>
        </div>
        <div onClick={wishListToggle} className="product-wishlist">
          <HeartOutlined className="heart-icon" style={wishListStyle} />
          <HeartFilled
            className="heart-icon heart-filled"
            style={wishListedStyle}
          />
        </div>
        <div className="product-card-menu">
          <div className="product-color-box">
            <h4>colours</h4>
            <div className="colors-div">
              {colours &&
                colours.map((allColor) => {
                  return (
                    <span
                      className="color-box"
                      style={{ backgroundColor: allColor }}
                    ></span>
                  );
                })}
            </div>
          </div>
          <div className="product-sizes-box">
            <h4>sizes</h4>
            <div className="sizes-div">
              {sizes &&
                sizes.map((size) => (
                  <span
                    key={size}
                    className={
                      sizes.includes(size)
                        ? "enabled-size"
                        : "disabled-size"
                    }
                  >
                    {size}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card-meta">
        <div className="meta-content">
          <h3>{title}</h3>
          <p className="meta-price">
            <span>€{price}</span>
            <span>€{prevprice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
