import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductsContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const localWishlistData = () => {
  let wishlistData = localStorage.getItem("wishlist");

  if (!wishlistData) {
    return [];
  }

  if (wishlistData.length === 0) {
    return [];
  } else {
    return JSON.parse(wishlistData);
  }
};

const initialState = {
  filtered_products: [],
  searched_products: [],
  all_products: [],
  wishlist_products: localWishlistData(),
  sorting_value: "new",
  filters: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = (event) => {
    dispatch({ type: "GET_SORT_VALUE", payload: event });
  };

  // Update the Filter values 👇
  const updateFilterValues = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const FilterProducts = (filterValues, filterType) => {
    return dispatch({
      type: "FILTER_PRODUCTS",
      payload: { filterValues, filterType },
    });
  };

  // Clear search Value 👇
  const ClearSearchValue = () => {
    state.filters.text = "";
    state.searched_products = [];
    dispatch({ type: "CLEAR_SEARCH_VALUE" });
  };

  const wishlistProducts = (id) => {
    dispatch({ type: "WISHLIST_PRODUCT", payload: id });
  };

  // to sort the products 👇
  useEffect(() => {
    dispatch({ type: "FILTER_SEARCHED_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  // Loads all the products for All Products pages 👇
  useEffect(() => {
    dispatch({ type: "LOAD_FILTERED_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist_products));
  }, [state.wishlist_products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting,
        updateFilterValues,
        ClearSearchValue,
        FilterProducts,
        wishlistProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
