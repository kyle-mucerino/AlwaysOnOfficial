import React from "react";
import "./platform.css";
import { ReactComponent as Map } from "../../assets/map3.svg";
import { NavLink } from "react-router-dom";
import gif4 from "../../assets/chatbot (5).png";
import gif5 from "../../assets/Contact Us Routing.png";
import gif6 from "../../assets/Analytics2.png";
import chatBot2 from "../../assets/generative.png";
import { FlipWordsDemo } from "../FlipWordsDemo";
import { AppleCardsCarouselDemo } from "../appleCardsCarouselDemo";


function Platform() {

  return (
    <>
      {/* SECTION 1 */}
      <div className="section section-1 flex flex-row border-b-2 border-black border-t-2">
        <div className="flex flex-col justify-center text-center sm:text-left sm:ml-8 mx-auto w-[38rem]">
          <div className="headline mb-4">
            <h1 className="text-6xl sm:text-8xl poppins-bold">AlwaysOn</h1>
          </div>
          <div className="homepage-hero w-full sm:w-max">
            <FlipWordsDemo />
          </div>
          <div className="free-trial mt-8 text-center sm:text-left">
            <button
              className="border-2 border-white bg-white text-black rounded-lg p-2 sm:p-6 freeman-regular uppercase text-lg sm:text-3xl"
              onClick={() => (window.location.href = "/contact-us")}
              aria-label="Link to calendly to book an appointment"
            >
              <span>Schedule Demo</span>
            </button>
          </div>
        </div>

        {/* Wide screen Homepage Hero */}
        <div className="hidden sm:flex flex-col items-center justify-center">
          <div className="z-10 items-center justify-center">
            <img className="h-80" src={chatBot2} alt="Chabot robotic face" />
          </div>
          <div className="hidden sm:flex flex-row justify-center items-center mt-4">
            <div className="w-1/3 flex flex-col justify-center items-center z-20">
              <div className="text-center">
                <div className="w-2/5 p-5 bg-white rounded-full inline-block">
                  <img
                    src={gif4}
                    alt="gif showing a survey"
                    className="rounded-lg"
                  />
                </div>
                <h1 className="font-bold text-xl">
                  <span className="rounded-lg text-black p-2">Chatbot</span>
                </h1>
              </div>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center z-20">
              <div className="text-center">
                <div className="w-2/5 p-5 bg-white rounded-full inline-block">
                  <img
                    src={gif5}
                    alt="gif of person communicating"
                    className="rounded-lg"
                  />
                </div>
                <h1 className="font-bold text-xl">
                  <span className="rounded-lg text-black p-2">
                    Contact Us Routing
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center z-20">
              <div className="text-center">
                <div className="w-2/5 p-5 bg-white rounded-full inline-block">
                  <img
                    src={gif6}
                    alt="gif of info & person"
                    className="rounded-lg"
                  />
                </div>
                <h1 className="font-bold text-xl">
                  <span className="rounded-lg text-black p-2">
                    Analytics
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-2 border-b-2 border-black flex flex-col">
        <h1 className="flex text-2xl sm:text-5xl font-bold justify-center items-center p-6 mt-0 sm:mt-6 poppins-bold">
          Elevate your Customer Service & Operational Efficiency
        </h1>
        <div class="flex flex-col sm:flex-row justify-center relative overflow-hidden p-4 sm:py-12">
          <div class="mx-auto w-full sm:w-[35rem]">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-7 py-6 ring-1 ring-gray-900/5 rounded-lg leading-none flex justify-center items-center space-x-6 chatbot">
                <div class="space-y-4 sm:space-y-8">
                  <p class="text-3xl sm:text-5xl poppins-bold">Chatbot</p>
                  <ol className="text-left space-y-4 sm:space-y-10">
                    <li className="text-lg sm:text-2xl open-sans-light">
                      <b>1.</b> Find the right information faster
                    </li>
                    <li className="text-lg sm:text-2xl open-sans-light">
                      <b>2.</b> Instant 24/7 self-service support
                    </li>
                    <li className="text-lg sm:text-2xl open-sans-light">
                      <b>3.</b> Increase capacity by reducing inquiries
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="flex text-8xl font-bold justify-center items-center">
            &#43;
          </div>
          <div class="mx-auto w-full sm:w-[35rem]">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-7 py-6 ring-1 ring-gray-900/5 rounded-lg leading-none flex justify-center items-center space-x-6 analytics">
                <div class="space-y-4 sm:space-y-8">
                  <p class="text-3xl sm:text-5xl poppins-bold">Analytics</p>
                  <ul className="text-left space-y-4 sm:space-y-10">
                    <li className="text-lg sm:text-2xl open-sans-light">
                      <b>1.</b> See real-time trends & insights
                    </li>
                    <li className="text-lg sm:text-2xl open-sans-light">
                      <b>2.</b> Find gaps and outdated information
                    </li>
                    <li className="text-lg sm:text-2xl open-sans-light">
                      <b>3.</b> Update chatbot & website content 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items justify-center text-center mb-4">
          <a
            href="/ai-chatbot-analytics"
            aria-label="Learn more about AI Chatbot + Analytics"
          >
            <button class="block text-orange-500 hover:bg-orange-500 transition duration-200 border-orange-500 sm:p-4 p-2 text-xl sm:text-3xl border-4 rounded-lg bg-white hover:text-white hover:border-white">
              Learn More →
            </button>
          </a>
        </div>
      </div>

      {/* <div className="section-3" id="survey">
        <AppleCardsCarouselDemo />
      </div> */}

      <div className="section section-4 flex flex-col p-4 sm:p-0">
        <div className="text-center">
          <h1 className="text-3xl sm:text-7xl font-extrabold poppins-bold">
            Our Partners
          </h1>
          <p className="text-lg sm:text-3xl italic mt-2">
            100+ organizations in 18 states use AlwaysOn to elevate their
            customer service
          </p>
        </div>
        <div className="flex flex-col sm:flex-row text-center">
          <div className="flex flex-col mt-4 w-1/2 mx-auto">
            <div className="flex flex-col my-12 drop-shadow-2xl">
              <Map className="scale-150 sm:scale-110" />
              <div className="flex flex-row mt-8 italic attribution opacity-10">
                <a href="https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg">
                  Heitordp, CC0, via Wikimedia Commons
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-5 flex flex-col">
        {/* <div className="text-center p-2">
          <h1 className="text-7xl poppins-bold">Testimonials</h1>
          <p className="text-5xl open-sans-lite mb-16 text-center">
            See what our partners are saying about AlwaysOn
          </p>
        </div> */}
        {/* <div className="testimonials hidden custom:flex flex-row p-8 justify-center">
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
        </div> */}
        <div className="block content-container-1 text-center">
          <h1 className="text-xl sm:text-6xl uppercase poppins-bold p-6 sm:p-12 text-black">
            Explore the power of AlwaysOn
          </h1>
          <div className="free-trial flex-row">
            <button
              className="border-2 border-white bg-white text-black rounded-lg p-2 sm:p-6 freeman-regular uppercase text-lg sm:text-3xl"
              onClick={() => (window.location.href = "/contact-us")}
              aria-label="Link to calendly to book an appointment"
            >
              <span>Schedule demo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;