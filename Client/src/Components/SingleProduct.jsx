import React, { useEffect, useState } from "react";
import "../Styles/SingleProduct.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Contexts/ProductsContext";
import {
  DownOutlined,
  SafetyOutlined,
  HomeOutlined,
  CodeSandboxOutlined,
  ZoomInOutlined,
  MinusOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Rate } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { useCartContext } from "../Contexts/cartContext";

export default function SingleProduct() {
  const API = "http://localhost:8000/all-products";
  const { isSingleLoading, getSingleProduct, singleProduct, initialColor } =
    useProductContext();
  const { addToCart } = useCartContext();
  const { id } = useParams();
  const [tabActive, setTabActive] = useState("compo");
  const [showRev, setShowRev] = useState(false);
  const [writeRev, setWriteRev] = useState(false);
  const [sortRev, setSortRev] = useState("Most recent");
  const [sortedReviews, setSortedReviews] = useState([]);
  const [sizesDraw, setSizesDraw] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const quantity = 1;
  
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  useEffect(() => {
    if(initialColor) {
      setSelectedColor(initialColor)
    }
  }, [initialColor])
  
  const {
    id: alias,
    title,
    price,
    prevPrice,
    images,
    sizes,
    colours,
    care,
    description,
    modelSize,
    articleName,
    composition,
    madeIn,
    reviews,
  } = singleProduct;

  // reviews Section Logic 👇

  function reviewToggle() {
    setShowRev(!showRev);
  }

  function writeRevToggle(e) {
    setWriteRev(!writeRev);
  }

  const sortReviews = (a, b) => {
    switch (sortRev) {
      case "Most recent":
        return new Date(b.date) - new Date(a.date);
      case "Highest rating":
        return b.rate - a.rate;
      case "Lowest rating":
        return a.rate - b.rate;
      default:
        return 0;
    }
  };

  // Sort reviews when the sorting option changes
  useEffect(() => {
    if (reviews) {
      const newSortedReviews = [...reviews].sort(sortReviews);
      setSortedReviews(newSortedReviews);
    } else {
      setSortedReviews([]); // Set to empty array if reviews is not available
    }
  }, [reviews, sortRev]);

  function swToggle() {
    setSizesDraw(!sizesDraw);
  }

  function getSize(size) {
    setSelectedSize(size)
    swToggle()
  }

  if (isSingleLoading) {
    return (
      <div>
        <LoadingOutlined />
      </div>
    );
  }

  return (
    <main key={id} className="single-product-page">
      <section className="product-section">
        <div className="product-wrapper">
          <div className="product-media">
            <div className="inner-media">
              <div className="sale-badge">sale</div>
              <div className="media-list">
                {images &&
                  images.map((image) => {
                    return (
                      <div className="media-image">
                        <img src={image} alt="media-list" />
                        <span className="media-zoom">
                          <ZoomInOutlined />
                        </span>
                      </div>
                    );
                  })}
              </div>
              <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination]}
                className="media-swiper"
              >
                {images &&
                  images.map((image) => {
                    return (
                      <SwiperSlide>
                        <img src={image} alt="product-media" />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
          <div className="product-info">
            <div className="sticky-info">
              <h1 className="info-title">{title}</h1>
              <p className="info-prices">
                <span className="sale-price">€{price}</span>
                <span className="prev-price">€{prevPrice}</span>
              </p>
              <div className="info-colours">
                <span>colour</span>
                <div className="colors-div">
                  {colours &&
                    colours.map((allColor) => {
                      return (
                        <span
                          className={`color-box ${selectedColor === allColor ? "active-color" : ""}`}
                          style={{ backgroundColor: allColor }}
                          onClick={() => {
                            setSelectedColor(allColor);
                          }}
                        ></span>
                      );
                    })}
                </div>
              </div>
              <div className="info-sizes-dropdown">
                <span onClick={swToggle}>
                  {!selectedSize ? "Choose Size" : selectedSize} <DownOutlined />
                </span>
                <ul style={{ display: sizesDraw ? "block" : "none" }}>
                  {sizes &&
                    sizes.map((size) => {
                      return (
                        <li onClick={() => getSize(size)}>{size}</li>
                      );
                    })}
                </ul>
              </div>
              <span
                className="info-checkout-btn"
                onClick={() =>
                  addToCart(id, selectedColor, selectedSize, quantity, singleProduct)
                }
              >
                add to cart
              </span>
              <p className="model-size">
                The model is wearing size {modelSize}
              </p>
              <div className="info-desc">
                <p>{description}</p>
              </div>
              <div className="info-tab">
                <ul className="tab-header">
                  <li
                    className={tabActive === "compo" ? "active" : ""}
                    onClick={() => {
                      setTabActive("compo");
                    }}
                  >
                    Composition
                  </li>
                  <li
                    className={tabActive === "care" ? "active" : ""}
                    onClick={() => {
                      setTabActive("care");
                    }}
                  >
                    care
                  </li>
                  <li
                    className={tabActive === "made" ? "active" : ""}
                    onClick={() => {
                      setTabActive("made");
                    }}
                  >
                    made in
                  </li>
                  <li
                    className={tabActive === "artic" ? "active" : ""}
                    onClick={() => {
                      setTabActive("artic");
                    }}
                  >
                    article name
                  </li>
                </ul>
                <div
                  className={`tab-bottom 
                    ${tabActive === "care" ? "care" : ""}
                    ${tabActive === "made" ? "made" : ""}
                    ${tabActive === "artic" ? "artic" : ""}`}
                >
                  <div>
                    <div className="fulldiv">{composition}</div>
                  </div>
                  <div>
                    <div className="fulldiv">{care}</div>
                  </div>
                  <div>
                    <div className="fulldiv">{madeIn}</div>
                  </div>
                  <div>
                    <div className="fulldiv">{articleName}</div>
                  </div>
                </div>
              </div>
              <ul className="info-services-list">
                <li>
                  <SafetyOutlined /> Secure payment
                </li>
                <li>
                  <HomeOutlined /> Delivery in Europe
                </li>
                <li>
                  <CodeSandboxOutlined /> Free shipping
                </li>
                <li>
                  <CodeSandboxOutlined /> Returns within 30 days
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-reviews">
          <span onClick={reviewToggle}>
            Reviews <MinusOutlined />
          </span>
          <div
            className="reviews-wrapper"
            style={{ display: showRev ? "block" : "none" }}
          >
            <div className="reviews-top">
              <div className="rating-left">
                <span>4</span>
                <span>/ 5</span>
              </div>
              <div className="rating-right">
                <Rate allowHalf disabled defaultValue={5} />
                <span>{sortedReviews.length} rating</span>
              </div>
            </div>
            <div className="reviews-bottom">
              <div className="write-a-review">
                <span className="review-btn" onClick={writeRevToggle}>
                  Write a review
                </span>
                <form className={`review-form ${writeRev ? "active" : ""}`}>
                  <span className="review-title">Write a review</span>
                  <Rate defaultValue={5} />
                  <input type="text" placeholder="Review..." />
                  <button type="submit">Submit</button>
                </form>
              </div>
              {sortedReviews.length > 0 ? (
                <div className="all-reviews">
                  <div className="reviews-sorting">
                    <select id="reviews-sort">
                      <option
                        value="0"
                        onClick={(e) => {
                          setSortRev(e.target.innerText);
                        }}
                      >
                        Most recent
                      </option>
                      <option
                        value="1"
                        onClick={(e) => {
                          setSortRev(e.target.innerText);
                        }}
                      >
                        Highest rating
                      </option>
                      <option
                        value="2"
                        onClick={(e) => {
                          setSortRev(e.target.innerText);
                        }}
                      >
                        Lowest rating
                      </option>
                    </select>
                  </div>
                  <div className="reviews-messages-wrapper">
                    {sortedReviews &&
                      sortedReviews.map((review) => {
                        return (
                          <div className="single-review">
                            <Rate allowHalf disabled value={review.rate} />
                            <span>Katrinrohnke K.</span>
                            <p>{review.message}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ) : (
                <div className="no-reviews">No reviews yet</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
