import React, { useReducer, useContext, useEffect, createContext } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";
import DisabledContext from "antd/es/config-provider/DisabledContext";

const AppContext = createContext();

const API = "http://localhost:8000/all-products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  // 2nd API for calling a single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data[0];
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
}

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext, AppContext };
