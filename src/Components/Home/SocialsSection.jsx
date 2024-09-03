import React from "react";
import "../../Styles/Home/SocialsSection.css";
import { InstagramOutlined } from "@ant-design/icons";

export default function SocialsSection() {
  return (
    <section className="socials-section">
      <div className="social-title-box">
        <h1>
          Follow <span>our</span> socials
        </h1>
      </div>
      <div className="social-content">
        <a
          href="https://www.instagram.com/pixel_manic/"
          className="social-card"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/447356728_856508649622224_3650087259532079200_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=WuaIjkgDQxUQ7kNvgFtAxI4&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCb-sz2_CGxozbHKI1Ru1dd11rOvbRryYMdVxgOCuUjuA&oe=6670897B"
            alt="social-link"
            className="social-img"
          />
          <div className="insta-icon-box">
            <InstagramOutlined style={{fontSize:"25px"}} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/pixel_manic/"
          className="social-card"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.pinimg.com/736x/4d/03/a7/4d03a74a64a8b9c46641d3a378a879a8.jpg"
            alt="social-link"
            className="social-img"
          />
          <div className="insta-icon-box">
            <InstagramOutlined style={{fontSize:"25px"}} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/pixel_manic/"
          className="social-card"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.pinimg.com/736x/e8/32/3e/e8323eb5db12d07f4091940aabe976fe.jpg"
            alt="social-link"
            className="social-img"
          />
          <div className="insta-icon-box">
            <InstagramOutlined style={{fontSize:"25px"}} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/pixel_manic/"
          className="social-card"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.pinimg.com/736x/5a/a7/dc/5aa7dc5f8296835dc4b71aba9fca7ce1.jpg"
            alt="social-link"
            className="social-img"
          />
          <div className="insta-icon-box">
            <InstagramOutlined style={{fontSize:"25px"}} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/pixel_manic/"
          className="social-card"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.pinimg.com/736x/c9/91/03/c99103ebeff0ce184a578f32f6944647.jpg"
            alt="social-link"
            className="social-img"
          />
          <div className="insta-icon-box">
            <InstagramOutlined style={{fontSize:"25px"}} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/pixel_manic/"
          className="social-card"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://i.pinimg.com/736x/cc/d1/a4/ccd1a4d8cd45b7829d236b94e7ef68c9.jpg"
            alt="social-link"
            className="social-img"
          />
          <div className="insta-icon-box">
            <InstagramOutlined style={{fontSize:"25px"}} />
          </div>
        </a>
      </div>
    </section>
  );
}
