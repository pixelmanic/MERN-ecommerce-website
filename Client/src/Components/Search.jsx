import { useEffect, useState } from "react";
import { useFilterContext } from "../Contexts/FilterContext";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import Card from "./Card";
import { Link } from "react-router-dom";

const Search = ({ searchOpen, searchToggle }) => {
  const [isSearching, setIsSearching] = useState(false);
  const {
    filters: { text },
    updateFilterValues,
    searched_products,
    ClearSearchValue,
  } = useFilterContext();

  useEffect(() => {
    if (text !== "") {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [text]);

  const clearSearch = () => {
    setIsSearching(false);
    ClearSearchValue();
  };

  return (
    <div className="nav-search-box">
      <div className="search-content-wrapper" style={searchOpen}>
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            name="text"
            value={text}
            onChange={updateFilterValues}
          />
          {isSearching ? (
            <span className="search-btn" onClick={clearSearch}>
              <CloseOutlined />
            </span>
          ) : (
            <span className="search-btn">
              <SearchOutlined />
            </span>
          )}
        </form>
        {searched_products && searched_products.length > 0 && (
          <div className="nav-products-wrapper">
            <div className="products-row" onClick={searchToggle}>
              {searched_products.slice(0, 4).map((product) => {
                return <Card key={product.id} {...product} />;
              })}
            </div>
            <div className="all-products-box">
              <Link to="/searched-products" className="main-button-black" onClick={searchToggle}>
                Show all search results
              </Link>
            </div>
          </div>
        )}
        {text && searched_products.length === 0 && (
          <div className="search-results-wrapper">
            <div className="search-no-results">
              No results found for "{text}". Check the spelling or use a
              different word or phrase.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
