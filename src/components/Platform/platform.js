import React, { useState, useRef, useEffect } from "react";
import "./platform.css";
import { ReactComponent as Map } from "../../assets/map2.svg";
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
import chatBot from "../../assets/AOChatBot.png";
import logo2 from "../../assets/logo2.png";


function Platform() {

  const [selectedImage, setSelectedImage] = useState("image1");

  const images = {
    image1: gif2,
    image2: gif3,
    image3: gif4,
    image4: gif5
  };

  const [selectedImage2, setSelectedImage2] = useState("image5");

  const images2 = {
    image5: gif6,
    image6: gif7,
    image7: gif8,
    image8: gif9
  };

    const studentSliderRef = useRef(null);
    const studentCountRef = useRef(null);
    const questionCountRef = useRef(null);

    useEffect(() => {
      const slider = studentSliderRef.current;
      const studentCount = studentCountRef.current;
      const questionCount = questionCountRef.current;

      if (slider && studentCount && questionCount) {
        const updateCounts = () => {
          const studentValue = slider.value;
          studentCount.textContent = studentValue;
          const questionValue = (studentValue * 3).toFixed(); // Example calculation
          questionCount.textContent = questionValue;
        };

        slider.addEventListener("input", updateCounts);
        updateCounts(); // Initial update

        return () => {
          slider.removeEventListener("input", updateCounts);
        };
      }
    }, []);

  return (
    <>
      {/* SECTION 1 */}
      <div className="section section-1 flex flex-row border-b-2 border-black">
        <div className="flex flex-col justify-evenly text-left ml-12">
          <div className="headline mb-4">
            <h1 className="text-8xl alata-regular">AlwaysOn</h1>
          </div>
          <div>
            <p className="text-4xl saira-medium">
              A powerful AI chatbot in the center of a customer service platform
            </p>
          </div>
          <div className="free-trial">
            <button className="border-2 border-white bg-white text-black rounded-lg p-6 freeman-regular uppercase">
              <span>Get started today</span>
            </button>
          </div>
        </div>

        <div className="flex-grow relative feature-container w-full">
          <div className="center-logo">
            <img
              className="h-48 mx-4"
              src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
              alt="Logo"
            />
          </div>
          <div className="feature feature-1 w-1/3 text-left">
            <a href="#webBot">
              <h3 className="font-extrabold text-lg">Website Chatbot</h3>
              <img src={gif2} alt="Feature 1" className="w-1/2 rounded-3xl" />
            </a>
          </div>
          <div className="feature feature-2 w-1/3 text-left">
            <a href="#docBot">
              <h3 className="font-extrabold text-lg">
                Internal Document Chatbot
              </h3>
              <img src={gif3} alt="Feature 2" className="w-1/2 rounded-3xl" />
            </a>
          </div>
          <div className="feature feature-3 w-1/3 text-left">
            <a href="#survey">
              <img src={gif4} alt="Feature 3" className="w-1/2 rounded-3xl" />
              <h3 className="font-extrabold text-lg">Survey Tool</h3>
            </a>
          </div>
          <div className="feature feature-4 w-1/3 text-left">
            <a href="#contact">
              <img src={gif5} alt="Feature 4" className="w-1/2 rounded-3xl" />
              <h3 className="font-extrabold text-lg">Contact Us Routing</h3>
            </a>
          </div>
          <div className="feature feature-5 w-1/3 text-left">
            <a href="#professional">
              <img src={gif6} alt="Feature 5" className="w-1/2 rounded-3xl" />
              <h3 className="font-extrabold text-lg">Professional Services</h3>
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section section-2 flex flex-row">
        <div className="flex flex-col" id="webBot">
          <h1 className="alata-regular text-4xl mb-4">Website Chatbot</h1>
          <img
            src={chatBot}
            alt="gif"
            className="w-1/2 rounded-lg mx-auto drop-shadow-2xl"
          />
        </div>
        <div className="flex flex-col" id="docBot">
          <h1 className="alata-regular text-4xl mb-4">
            Internal Document Chatbot
          </h1>
          <img
            src={chatBot}
            alt="gif"
            className="w-1/2 rounded-lg mx-auto drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="relative flex justify-center items-center section-3 w-full">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="Logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>

      {/* SECTION 4 */}
      <div className="section section-4 hidden custom:flex flex-col">
        <div className="flex flex-row">
          <div className="flex w-1/2">
            <figure className="implement">
              <img
                className="w-5/6 mx-auto"
                src={images[selectedImage]}
                alt="gif"
              />
            </figure>
          </div>
          <div className="flex items-center w-1/2 p-8">
            <div className="flex flex-col" id="survey">
              <h1 className="text-5xl font-extrabold alata-regular">
                Survey Tool
              </h1>
              <h2 className="text-3xl font-extrabold alata-regular my-4">
                Capture Feedback
              </h2>
              <p className="text-3xl saira-regular">
                In addition to the ChatBot, AlwaysOn's extensive Survey Tool
                will give you further insights into the questions and comments
                most prevalent on your school's website.
              </p>
              <div className="mt-4 flex">
                <button
                  className="text-3xl saira-regular button-shadow"
                  onClick={() => setSelectedImage("image1")}
                >
                  Feature 1
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image2")}
                >
                  Feature 2
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image3")}
                >
                  Feature 3
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image4")}
                >
                  Feature 4
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse p-8" id="contact">
          <div className="flex w-1/2">
            <figure className="pro">
              <img
                className="w-5/6 mx-auto"
                src={images2[selectedImage2]}
                alt="pro"
              />
            </figure>
          </div>
          <div className="flex items-center w-1/2">
            <div className="flex flex-col">
              <h1 className="text-5xl font-extrabold alata-regular">
                Contact Us Routing
              </h1>
              <h2 className="text-3xl font-extrabold alata-regular my-4">
                Lorum Ipsum
              </h2>
              <p className="text-3xl saira-regular">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="mt-4 flex">
                <button
                  className="text-3xl saira-regular button-shadow"
                  onClick={() => setSelectedImage2("image5")}
                >
                  Feature 1
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage2("image6")}
                >
                  Feature 2
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage2("image7")}
                >
                  Feature 3
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage2("image8")}
                >
                  Feature 4
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-8" id="professional">
          <div className="flex w-1/2">
            <figure className="implement">
              <img
                className="w-5/6 mx-auto"
                src={images[selectedImage]}
                alt="gif"
              />
            </figure>
          </div>
          <div className="flex items-center w-1/2">
            <div className="flex flex-col">
              <h1 className="text-5xl font-extrabold alata-regular">
                Professional Services
              </h1>
              <h2 className="text-3xl font-extrabold alata-regular my-4">
                Lorem Ipsum
              </h2>
              <p className="text-3xl saira-regular">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="mt-4 flex">
                <button
                  className="text-3xl saira-regular button-shadow"
                  onClick={() => setSelectedImage("image1")}
                >
                  Feature 1
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image2")}
                >
                  Feature 2
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image3")}
                >
                  Feature 3
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image4")}
                >
                  Feature 4
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="section section-5 flex flex-col">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold alata-regular">Our Clients</h1>
          <p className="text-3xl italic mt-2">
            AlwaysOn is in 13 states and expanding across the nation!
          </p>
        </div>
        <div className="flex flex-row text-center">
          <div className="flex flex-col mt-4 w-1/2 mx-auto">
            <div className="hidden custom:flex flex-col my-12 drop-shadow-2xl">
              <Map />
              <div className="flex flex-row mt-8 italic">
                <a href="https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg">
                  Heitordp
                </a>
                , CC0, via Wikimedia Commons
              </div>
            </div>
          </div>
          <div className="custom:grid grid-cols-1 mx-auto my-auto hidden">
            <ul className="saira-regular text-2xl states">
              <li>California</li>
              <li>Texas</li>
              <li>Michigan</li>
              <li>Wisconsin</li>
              <li>Illinois</li>
              <li>Oklahoma</li>
              <li>Kansas</li>
              <li>New York</li>
              <li>Pennsylvania</li>
              <li>Indiana</li>
              <li>Washington</li>
              <li>Colorado</li>
              <li>New Jersey</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 6 */}
      <div className="section section-6 flex flex-col">
        <div className="text-center p-2">
          <h1 className="text-7xl alata-regular">Testimonials</h1>
          <p className="text-3xl italic mt-4 text-center">
            100+ schools & districts in 13 states enhance their schools online
            presence with AlwaysOn
          </p>
        </div>
        <div className="testimonials hidden custom:flex flex-row p-8 justify-center">
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  If you do the job badly enough, sometimes you don't get asked
                  to do it again.
                </p>
              </blockquote>
              <h3>Wisteria Ravenclaw</h3>
              <h4>Google Inc.</h4>
            </figcaption>
          </figure>
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  I'm killing time while I wait for life to shower me with
                  meaning and happiness.
                </p>
              </blockquote>
              <h3>Ursula Gurnmeister</h3>
              <h4>Facebook</h4>
            </figcaption>
          </figure>
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  The only skills I have the patience to learn are those that
                  have no real application in life.{" "}
                </p>
              </blockquote>
              <h3>Ingredia Nutrisha</h3>
              <h4>Twitter</h4>
            </figcaption>
          </figure>
        </div>
        <div className="hidden custom:block content-container-1 text-center">
          <h1 className="text-6xl alata-regular p-12">
            See what you can accomplish with AlwaysOn
          </h1>
          <div className="free-trial flex-row">
            <button className="border-2 border-white bg-white text-black rounded-lg p-4 freeman-regular uppercase mx-4">
              <span>Get started</span>
            </button>
            <button className="border-2 border-white bg-white text-black rounded-lg p-4 freeman-regular uppercase">
              <span>contact us</span>
            </button>
          </div>
        </div>
        {/* ROI CALCULATOR SECTION */}
        {/* <div
          id="roi-calculator"
          className="my-8 text-center flex flex-col justify-center items-center alata-regular"
        >
          <label htmlFor="student-slider" className="text-3xl">
            Number of Students: <span ref={studentCountRef}>500</span>
          </label>
          <input
            type="range"
            id="student-slider"
            min="100"
            max="5000"
            defaultValue="2500"
            ref={studentSliderRef}
            className="my-8"
          />
          <p className="text-3xl">
            Estimated Questions Answered:{" "}
            <span ref={questionCountRef}>3000</span>
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Platform;