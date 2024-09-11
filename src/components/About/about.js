import React, { useState } from "react";
import "./about.css";
import Image1 from "../../assets/AOTopQs.png";
import Image2 from "../../assets/homegif.gif";
import Image4 from "../../assets/AOChatBot.png";
import gif from "../../assets/homegif.gif";
import gif2 from "../../assets/school.gif";
import gif3 from "../../assets/students.gif";
import gif4 from "../../assets/education.gif";
import gif5 from "../../assets/secretary.gif";
import gif6 from "../../assets/bell.gif";
import gif7 from "../../assets/lesson.gif";
import gif8 from "../../assets/teacher.gif";
import gif9 from "../../assets/blackboard.gif";
import gif10 from "../../assets/teacher2.gif";

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
      <div className="section section-3">
        <div className="ag-format-container p-4">
          <div className="ag-courses_box saira-regular hidden custom:grid grid-cols-8">
            <div className="ag-courses_item col-start-1 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">School-Friendly AI</div>

                <div className="ag-courses-item_date-box">
                  Our AI is trained to be an expert in school questions and
                  topics right out of the box. <br />
                  <button className="btn info mt-4 font-black">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
            <div className="col-start-5 col-span-1 my-auto">
              <img src={gif2} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="col-start-7 col-span-1 my-auto">
              <img src={gif3} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="ag-courses_item col-start-2 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Answer Quality Tools
                </div>

                <div className="ag-courses-item_date-box">
                  Custom FAQs (not required), AI website training, and answer
                  feedback help improve chatbot answers. <br />
                  <button className="btn info mt-4 font-black">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
            <div className="col-start-6 col-span-1 my-auto">
              <img src={gif7} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="col-start-8 col-span-1 my-auto">
              <img src={gif4} alt="school gif" className="rounded-3xl" />
            </div>

            {/* <div className="col-start-2 col-span-1 my-auto">
      <i className="fa-solid fa-bolt text-9xl">
        <span className="sr-only">Lightning Bolt</span>
      </i>
    </div> */}

            <div className="ag-courses_item col-start-3 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Contact Us Routing</div>

                <div className="ag-courses-item_date-box">
                  Route questions to specific staff members (if person is
                  needed) based on topic. <br />
                  <button className="btn info mt-4 font-black">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
            <div className="col-start-7 col-span-1 my-auto">
              <img src={gif6} alt="school gif" className="rounded-3xl" />
            </div>

            {/* <div className="col-start-1 col-span-1 my-auto">
      <img src={gif7} alt="school gif" className="rounded-3xl" />
    </div> */}
            <div className="col-start-2 col-span-1 my-auto">
              <img src={gif8} alt="school gif" className="rounded-3xl" />
            </div>

            <div className="ag-courses_item col-start-4 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Language Translation
                </div>

                <div className="ag-courses-item_date-box">
                  English, Spanish, and 10 other languages available. More
                  coming soon! <br />
                  <button className="btn info mt-4 font-black">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
            {/* <div className="col-start-7 col-span-1 my-auto justify-self-end">
      <i className="fa-solid fa-bolt text-9xl">
        <span className="sr-only">Lightning Bolt</span>
      </i>
    </div> */}

            <div className="col-start-1 col-span-1 my-auto">
              <img src={gif9} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="col-start-3 col-span-1 my-auto">
              <img src={gif10} alt="school gif" className="rounded-3xl" />
            </div>

            <div className="ag-courses_item col-start-5 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Analytics</div>

                <div className="ag-courses-item_date-box">
                  Question level data that gives you a real time passive focus
                  group and measurement of stakeholder needs. <br />
                  <button className="btn info mt-4 font-black">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>

            <div className="col-start-2 col-span-1 my-auto">
              <img src={gif2} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="col-start-4 col-span-1 my-auto">
              <img src={gif4} alt="school gif" className="rounded-3xl" />
            </div>

            <div className="ag-courses_item col-start-6 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Use Multiple Chatbots
                </div>

                <div className="ag-courses-item_date-box">
                  Districts can build unlimited chatbots, from district-wide to
                  school site or topic specific. <br />
                  <button className="btn info mt-4 font-black">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GIF SPEECH BUBBLE */}
      <div className="flex flex-row justify-center my-8">
        <div>
          <img src={gif} alt="gif" className="gif rounded-lg" />
        </div>
        <p className="bubble left alata-regular text-2xl w-1/5 self-center">
          See the Chat Bot in action!
        </p>
      </div>
    </>
  );
}

export default About;
