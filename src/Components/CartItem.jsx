import "../Styles/Navbar.css";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/cartContext";

const CartItem = ({ item, index, cartToggle }) => {
  const { removeItem, incrementItem, decrementItem } = useCartContext();
  const [sizesDraw, setSizesDraw] = useState(false);
  let id = item.location;

  function swToggle() {
    setSizesDraw(!sizesDraw);
  }

  return (
    <div key={index} className="cart-items">
      <div className="item-left">
        <Link
          to={`/products/${id}`}
          className="item-image"
          onClick={cartToggle}
        >
          <img src={item.image} alt="product" className="item-image" />
        </Link>
      </div>
      <div className="item-right">
        <div>
          <p className="item-title">
            <Link to={`/products/${id}`} onClick={cartToggle}>
              {item.title}{" "}
              <span className="item-sub-title">{item.selectedColor}</span>
            </Link>
            <span
              className="item-remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </span>
          </p>
          <p className="item-prices">
            <span className="item-price">€{item.price}</span>
            {item.prevPrice && (
              <span className="item-prev-price">€{item.prevPrice}</span>
            )}
          </p>
        </div>
        <div className="item-dropdown">
          <div className="item-sizes-dropdown">
            <span onClick={swToggle}>
              {item.selectedSize} <DownOutlined />
            </span>
            <ul style={{ display: sizesDraw ? "block" : "none" }}>
              {item.sizes &&
                item.sizes.map((size) => {
                  return <li>{size}</li>;
                })}
            </ul>
          </div>
          <div className="item-quantity">
            <ul>
              <li onClick={() => decrementItem(item.id)}>-</li>
              <li>{item.quantity}</li>
              <li onClick={() => incrementItem(item.id)}>+</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
