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
            poster="//rino-pelle.com/cdn/shop/files/preview_images/108cd08104d940dbb64588f7c6b76141.thumbnail.0000000000_small.jpg?v=1721810321"
          >
            <source
              src="http://rino-pelle.com/cdn/shop/videos/c/vp/108cd08104d940dbb64588f7c6b76141/108cd08104d940dbb64588f7c6b76141.HD-1080p-7.2Mbps-32243142.mp4?v=0"
              alt="banner.mp4"
            />
          </video>
          <div className="banner-text">
            <span>IT'S HERE!</span>
            <h1 className="banner-title">
            NEW <span> Arrivals</span>
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
