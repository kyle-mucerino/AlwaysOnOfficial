import React, { useRef, useEffect } from "react";
import "./platform.css";
import { ReactComponent as Map } from "../../assets/map2.svg";
import gif4 from "../../assets/chat.gif";
import gif5 from "../../assets/list.gif";
import gif6 from "../../assets/professional.gif";
import chatBot2 from "../../assets/chatbotph.png";
import { FlipWordsDemo } from "../FlipWordsDemo";
import { CanvasRevealEffectDemo } from "../CanvasRevealEffectDemo.js";
import { AppleCardsCarouselDemo } from "../appleCardsCarouselDemo";


function Platform() {

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
        <div className="flex flex-col justify-center text-left ml-12">
          <div className="headline mb-4">
            <h1 className="text-8xl poppins-bold">AlwaysOn</h1>
          </div>
          <div className="homepage-hero">
            <FlipWordsDemo />
          </div>
          <div className="free-trial mt-8">
            <button className="border-2 border-white bg-white text-black rounded-lg p-6 freeman-regular uppercase">
              <span>Get started today</span>
            </button>
          </div>
        </div>

        <div className="flex-grow relative feature-container w-full">
          <div className="center-logo z-10">
            <img className="h-84" src={chatBot2} alt="Logo" />
          </div>

          {/* Feature 3 */}
          <div className="feature feature-3 w-1/3 flex flex-col justify-center items-center z-20">
            <a href="#survey" className="text-center">
              <div className="w-1/2 p-4 bg-white rounded-full inline-block">
                <img src={gif4} alt="Feature 3" className="rounded-lg" />
              </div>
              <h3 className="font-extrabold text-lg">
                <span className="bg-black rounded-lg text-white p-1">
                  Survey Tool
                </span>
              </h3>
            </a>
          </div>

          {/* Feature 4 */}
          <div className="feature feature-4 w-1/3 flex flex-col justify-center items-center z-20">
            <a href="#contact" className="text-center">
              <div className="w-1/2 p-4 bg-white rounded-full inline-block">
                <img src={gif5} alt="Feature 4" className="rounded-lg" />
              </div>
              <h3 className="font-extrabold text-lg">
                <span className="bg-black rounded-lg text-white p-1">
                  Contact Us Routing
                </span>
              </h3>
            </a>
          </div>

          {/* Feature 5 */}
          <div className="feature feature-5 w-1/3 flex flex-col justify-center items-center z-20">
            <a href="#professional" className="text-center">
              <div className="w-1/2 p-4 bg-white rounded-full inline-block">
                <img src={gif6} alt="Feature 5" className="rounded-lg" />
              </div>
              <h3 className="font-extrabold text-lg">
                <span className="bg-black rounded-lg text-white p-1">
                  Professional Services
                </span>
              </h3>
            </a>
          </div>
        </div>
      </div>

      <div className="section-2">
        <CanvasRevealEffectDemo />
      </div>

      <div className="section-3">
        <AppleCardsCarouselDemo />
      </div>

      <div className="section section-4 flex flex-col">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold poppins-bold">Our Clients</h1>
          <p className="text-3xl italic mt-2">
            100+ schools & districts in 13 states enhance their schools online
            presence with AlwaysOn
          </p>
        </div>
        <div className="flex flex-row text-center">
          <div className="flex flex-col mt-4 w-1/2 mx-auto">
            <div className="hidden custom:flex flex-col my-12 drop-shadow-2xl">
              <Map />
              <div className="flex flex-row mt-8 italic attribution">
                <a href="https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg">
                  Heitordp, CC0, via Wikimedia Commons
                </a>
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

      <div className="section section-5 flex flex-col">
        <div className="text-center p-2">
          <h1 className="text-7xl poppins-bold">Testimonials</h1>
          <p className="text-3xl open-sans-light mt-4 text-center">
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
          <h1 className="text-6xl uppercase poppins-bold p-12 text-black">
            Explore the power of AlwaysOn
          </h1>
          <div className="free-trial flex-row">
            <button className="border-2 border-white bg-white text-black rounded-lg p-4 freeman-regular uppercase mx-4">
              <span>Get started today</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;