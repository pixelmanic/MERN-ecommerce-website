import React, { Suspense } from "react";
import "../../Styles/Home/Home.css";
import { Link } from "react-router-dom";
import ProductsSection from "./ProductsSection";
import AccesSection from "./AccesSection";
import LookbookSection from "./LookbookSection";
import SocialsSection from "./SocialsSection";

export default function Home() {
  const FeatSection = React.lazy(() => import("./FeatSection"));
  const VideoSection = React.lazy(() => import("./VideoSection"));
  return (
    <main className="home">
      <section className="main-banner">
        <Link to="/sale" className="banner-content">
          <video
            autoPlay
            loop
            preload="metadata"
            muted
            poster="//rino-pelle.com/cdn/shop/files/preview_images/2349e4898bda41bcb8307ca8458ee19e.thumbnail.0000000000_small.jpg?v=1688739093"
          >
            <source
              src="https://cdn.shopify.com/videos/c/vp/2349e4898bda41bcb8307ca8458ee19e/2349e4898bda41bcb8307ca8458ee19e.HD-1080p-7.2Mbps-16056296.mp4"
              alt="banner.mp4"
            />
          </video>
          <div className="banner-text">
            <span>up to 50% off on selected items</span>
            <h1 className="banner-title">
              Winter <span>Sale</span>
            </h1>
            <span className="main-button">Shop now</span>
          </div>
        </Link>
      </section>
      <ProductsSection />
      <AccesSection />
      <Suspense fallback={<div>Loading</div>}>
        <VideoSection />
        <FeatSection />
      </Suspense>
      <LookbookSection />
      <SocialsSection />
    </main>
  );
}
