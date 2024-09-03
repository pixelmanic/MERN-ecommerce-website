import React, { useEffect, useState } from "react";
import "../Styles/AllProducts.css";
import { SwapOutlined, CloseOutlined, MinusOutlined } from "@ant-design/icons";
import { useFilterContext } from "../Contexts/FilterContext";
import { Slider } from "@mui/material";

export default function Sort({ filterToggle, filterType }) {
  const { sorting, all_products, FilterProducts } = useFilterContext();

  const [filterSort, setFilterSort] = useState("new");
  const [activeSizes, setActiveSizes] = useState([]);
  const [activeCats, setActiveCats] = useState([]);
  const [activeColors, setActiveColors] = useState([]);
  const [filterBox, setFilterBox] = useState([
    "sort",
    "size",
    "category",
    "colour",
    "price",
  ]);
  const priceRange = findPriceRange(all_products);
  const [sliderValue, setSliderValue] = useState([
    priceRange.min,
    priceRange.max,
  ]);

  const sortProducts = (value) => {
    setFilterSort(value);
    sorting(value);
  };

  const filterBoxToggle = (box) => {
    if (filterBox.includes(box)) {
      setFilterBox(filterBox.filter((item) => item !== box));
    } else {
      setFilterBox([...filterBox, box]);
    }
  };
  // Sizes active Logic 👇
  const toggleFilterSizes = (size) => {
    // Check if the size is already active
    if (activeSizes.includes(size)) {
      // If active, remove it
      setActiveSizes(activeSizes.filter((item) => item !== size));
    } else {
      // If not active, add it
      setActiveSizes([...activeSizes, size]);
    }
  };

  // Categories active Logic 👇
  const toggleFilterCats = (cats) => {
    // Check if the category is already active
    if (activeCats.includes(cats)) {
      // If active, remove it
      setActiveCats(activeCats.filter((item) => item !== cats));
    } else {
      // If not active, add it
      setActiveCats([...activeCats, cats]);
    }
  };

  // Colors active Logic 👇
  const toggleFilterColors = (colors) => {
    // Check if the color is already active
    if (activeColors.includes(colors)) {
      // If active, remove it
      setActiveColors(activeColors.filter((item) => item !== colors));
    } else {
      // If not active, add it
      setActiveColors([...activeColors, colors]);
    }
  };

  useEffect(() => {
    const allFilters = [activeSizes, activeCats, activeColors, sliderValue];
    FilterProducts(allFilters, filterType);
  }, [activeSizes, activeCats, activeColors, sliderValue]);

  // TO GET A UNIQUE DATA OF EVERY FIELD
  const getUniqueCat = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "sizes") {
      return (newVal = [...new Set([].concat(...newVal))]);
    } else if (property === "colours") {
      return (newVal = [...new Set([].concat(...newVal))]);
    } else {
      return (newVal = [...new Set(newVal)]);
    }
  };

  const categoryOnly = getUniqueCat(all_products, "category");
  const sizesOnly = getUniqueCat(all_products, "sizes");
  const colorOnly = getUniqueCat(all_products, "colours");

  // Price Slider Logic 👇

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    console.log(newValue);
  };

  function findPriceRange(products) {
    if (products.length === 0) return { min: 0, max: 0 };

    let minPrice = Number.MAX_VALUE;
    let maxPrice = Number.MIN_VALUE;

    for (const product of products) {
      // Replace commas with periods and convert to number
      const price = parseFloat(product.price.replace(",", "."));

      if (price < minPrice) {
        minPrice = price;
      }
      if (price > maxPrice) {
        maxPrice = price;
      }
    }

    // Round the prices to the nearest whole number
    minPrice = Math.floor(minPrice);
    maxPrice = Math.floor(maxPrice);

    return { min: minPrice, max: maxPrice };
  }

  return (
    <div className="filter-wrapper">
      <div className="filter-title-wrapper">
        <h1 className="filter-title" onClick={() => filterToggle(false)}>
          <span>
            <SwapOutlined /> filter & sort{" "}
          </span>
          <CloseOutlined />
        </h1>
      </div>
      <div className="filter-sort">
        <h4 className="filter-title" onClick={() => filterBoxToggle("sort")}>
          sort <MinusOutlined />
        </h4>
        <ul
          className="filter-all-labels"
          style={{ display: filterBox.includes("sort") ? "block" : "none" }}
        >
          <li onClick={() => sortProducts("new")}>
            <span
              className={`checkboxcis ${filterSort === "new" ? "active" : ""}`}
            ></span>
            <span className="filter-label">Newest</span>
          </li>
          <li onClick={() => sortProducts("reco")}>
            <span
              className={`checkboxcis ${filterSort === "reco" ? "active" : ""}`}
            ></span>
            <span className="filter-label">Recommended</span>
          </li>
          <li onClick={() => sortProducts("lowToHigh")}>
            <span
              className={`checkboxcis ${
                filterSort === "lowToHigh" ? "active" : ""
              }`}
            ></span>
            <span className="filter-label">Price low to high</span>
          </li>
          <li onClick={() => sortProducts("highToLow")}>
            <span
              className={`checkboxcis ${
                filterSort === "highToLow" ? "active" : ""
              }`}
            ></span>
            <span className="filter-label">price high to low</span>
          </li>
        </ul>
      </div>
      <div className="filter-size">
        <h4 className="filter-title" onClick={() => filterBoxToggle("size")}>
          size <MinusOutlined />
        </h4>
        <ul
          className="sort-all-labels"
          style={{ display: filterBox.includes("size") ? "flex" : "none" }}
        >
          {sizesOnly &&
            sizesOnly.map((size) => {
              return (
                <li onClick={() => toggleFilterSizes(size)}>
                  <span
                    className={`checkboxcis ${
                      activeSizes.includes(size) ? "active" : ""
                    }`}
                  ></span>
                  <span className="filter-label">{size}</span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="filter-categories">
        <h4
          className="filter-title"
          onClick={() => filterBoxToggle("category")}
        >
          categories <MinusOutlined />
        </h4>
        <ul
          className="sort-all-labels"
          style={{ display: filterBox.includes("category") ? "flex" : "none" }}
        >
          {categoryOnly &&
            categoryOnly.map((cat) => {
              return (
                <li onClick={() => toggleFilterCats(cat)}>
                  <span
                    className={`checkboxcis ${
                      activeCats.includes(cat) ? "active" : ""
                    }`}
                  ></span>
                  <span className="filter-label">{cat}</span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="filter-colours">
        <h4 className="filter-title" onClick={() => filterBoxToggle("colour")}>
          colours <MinusOutlined />
        </h4>
        <ul
          className="sort-all-labels"
          style={{ display: filterBox.includes("colour") ? "flex" : "none" }}
        >
          {colorOnly &&
            colorOnly.map((color) => {
              return (
                <li onClick={() => toggleFilterColors(color)}>
                  <span
                    className={`checkboxcis ${
                      activeColors.includes(color) ? "active" : ""
                    }`}
                  ></span>
                  <span className="filter-label">{color}</span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="filter-price">
        <h4 className="filter-title" onClick={() => filterBoxToggle("price")}>
          price <MinusOutlined />
        </h4>
        <div
          className="price-slider"
          style={{ display: filterBox.includes("price") ? "block" : "none" }}
        >
          <Slider
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="off"
            color="#000"
            min={priceRange.min}
            max={priceRange.max}
            disableSwap
          />
          <div className="prices-range">
            <span>€{sliderValue[0]}</span>
            <span>€{sliderValue[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
