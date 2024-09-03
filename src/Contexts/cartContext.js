import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();

const localCartData = () => {
  let cartData = localStorage.getItem("cart");

  if (!cartData) {
    return [];
  }

  if (cartData.length === 0) {
    return [];
  } else {
    return JSON.parse(cartData);
  }
};

const initialState = {
  cart: localCartData(),
  totalItem: "",
  totalPrice: "",
  shippingFee: "200",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id,
    selectedColor,
    selectedSize,
    quantity,
    singleProduct
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, selectedColor, selectedSize, quantity, singleProduct },
    });
  };

  // Set Increment and Decrement

  const incrementItem = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const decrementItem = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  // Remove Item from Cart

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
