export default function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { id, selectedColor, selectedSize, quantity, singleProduct } =
      action.payload;

    let existingProduct = state.cart.find(
      (item) => item.id === id + selectedColor
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((item) => {
        if (item.id === id + selectedColor) {
          let newQuantity = item.quantity + quantity;

          if (newQuantity >= item.stock) {
            newQuantity = item.stock;
            return {
              ...item,
              quantity: newQuantity,
            };
          } else {
            return {
              ...item,
              quantity: newQuantity,
            };
          }
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + selectedColor,
        location: singleProduct.id,
        title: singleProduct.title,
        selectedColor,
        selectedSize,
        quantity,
        image: singleProduct.images[0],
        price: singleProduct.price,
        sizes: singleProduct.sizes,
        stock: singleProduct.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // Set Increment and Decrement

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let incQuantity = item.quantity + 1;

        if (incQuantity >= item.stock) {
          incQuantity = item.stock;
        }
        return {
          ...item,
          quantity: incQuantity,
        };
      } else {
        return item;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((item) => {
      if (item.id === action.payload) {
        let decQuantity = item.quantity - 1;

        if (decQuantity <= 1) {
          decQuantity = 1;
        }
        return {
          ...item,
          quantity: decQuantity,
        };
      } else {
        return item;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let newItemVal = state.cart.reduce((initialVal, item) => {
      let { quantity } = item;

      initialVal = initialVal + quantity;
      return initialVal;
    }, 0);
    return {
      ...state,
      totalItem: newItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let totalPrice = state.cart.reduce((initialVal, item) => {
      let { price, quantity } = item;
      let productPrice = parseFloat(price.replace(",", "."));
      let newPrice = Number(productPrice);
      initialVal = initialVal + newPrice * quantity;
      return initialVal;
    }, 0);
    return {
      ...state,
      totalPrice,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "UPDATE_TOTAL") {
  }
}
