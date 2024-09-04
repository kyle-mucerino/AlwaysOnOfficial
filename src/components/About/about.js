import React, { useState } from "react";
import "./about.css";
import Image1 from "../../assets/AOTopQs.png";
import Image2 from "../../assets/homegif.gif";
import Image4 from "../../assets/AOChatBot.png";

function About() {
  const [activeImage, setActiveImage] = useState("image1");

  const handleMouseOver = (imageId) => {
    setActiveImage(imageId);
  };
  return (
    <>
      <div className="section section-01 flex">
        <div className="container">
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Product Benefit 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#top">Read More</a>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Product Benefit 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#top">Read More</a>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Product Benefit 3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#top">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section section-02 flex flex-row items-center justify-center">
        <div className="flex flex-row container-1 items-center mx-auto">
          <div className="left-container">
            <img
              src={Image1}
              className={activeImage === "image1" ? "active" : ""}
              id="image1"
              alt="Mission Focused"
            />
            <img
              src={Image2}
              className={activeImage === "image2" ? "active" : ""}
              id="image2"
              alt="Customer Centric"
            />
            <img
              src={Image4}
              className={activeImage === "image3" ? "active" : ""}
              id="image3"
              alt="User Friendly"
            />
            <img
              src={Image2}
              className={activeImage === "image4" ? "active" : ""}
              id="image4"
              alt=""
            />
          </div>
          <div className="right-container saira-regular mx-auto my-auto">
            <h1 className="text-6xl mb-8">Product Overview</h1>
            <p className="text-2xl">
              Whatever words you want to emphasize, you
              <span
                className="highlight"
                onMouseOver={() => handleMouseOver("image1")}
              >
                &nbsp;highlight,
              </span>
              &nbsp;or&nbsp;
              <span
                className="highlight"
                onMouseOver={() => handleMouseOver("image2")}
              >
                this one,&nbsp;
              </span>
              and whenever the user hovers over or clicks that word, it will
              change&nbsp;
              <span
                className="highlight"
                onMouseOver={() => handleMouseOver("image3")}
              >
                images.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
    </>
  );
}

export default About;
