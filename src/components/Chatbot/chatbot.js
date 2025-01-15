import React, { useState } from "react";
import "./chatbot.css";
import webBotVideo from "../../assets/webBotVideo.mp4";
import docBotVideo from "../../assets/docBotVideo.mp4";
import { FlipWordsDemo } from "../FlipWordsDemo2";
import analytics2 from "../../assets/Analytics (2).png";
import chatBot from "../../assets/AOChatBot.png";
import logo2 from "../../assets/logo2.png";
import webBotPoster from "../../assets/webBotPoster.png";
import docBotPoster from "../../assets/docBotPoster.png";

function Chatbot() {
  const [selectedBot, setSelectedBot] = useState("website");

  const [selectedVideo, setSelectedVideo] = useState("website");

  return (
    <>
      {/* SECTION 1 */}
      <div className="section-cb-01 hidden sm:flex flex-col justify-center items-center">
        <div className="text-lg sm:text-4xl open-sans-light p-4 font-bold">
          <FlipWordsDemo />
        </div>
        <div className="container">
          <div
            className={`box flex justify-center items-center ${
              selectedBot === "website" ? "active" : ""
            }`}
            onClick={() => setSelectedBot("website")}
          >
            <span></span>
            <div className="content">
              <h2>Website Bot</h2>
              <p>
                Intelligent, multilingual, insightful chatbot trained on your
                organization's website.
              </p>
              <button aria-label="Learn more about the Website Bot">
                Learn More
              </button>
            </div>
          </div>
          <div
            className={`box ${selectedBot === "document" ? "active" : ""}`}
            onClick={() => setSelectedBot("document")}
          >
            <span></span>
            <div className="content">
              <h2>Document Bot</h2>
              <p>
                Intelligent, multilingual, insightful chatbot trained on your
                organization's documents.
              </p>
              <button aria-label="Learn more about the Document Bot">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-cb-2 hidden sm:flex flex-col items-center justify-center p-4">
        {selectedBot === "website" && (
          <>
            <div className="website text-2xl sm:text-4xl alata-regular">
              A chatbot trained on your organization's <span>website</span>
              <b>&#9660;</b>
            </div>
            <div className="video-container p-0 sm:p-8 mt-2 sm:mt-0">
              <video
                src={webBotVideo}
                className="video w-full sm:w-4/5 mx-auto rounded-lg"
                controls
              ></video>
            </div>
          </>
        )}
        {selectedBot === "document" && (
          <>
            <div className="document text-2xl sm:text-4xl alata-regular">
              A chatbot trained on your organization's <span>documents</span>
              <b>&#9660;</b>
            </div>
            <div className="video-container p-0 sm:p-8 mt-2 sm:mt-0">
              <video
                src={docBotVideo}
                className="video w-4/5 mx-auto rounded-lg"
                controls
              ></video>
            </div>
          </>
        )}
      </div>
      {/* Mobile */}
      <div className="border-t border-black section-mobile flex flex-col items-center justify-center sm:hidden">
        <h1 className="text-3xl poppins-bold mt-4 mb-2 p-1">
          Website Bot & Document Bot
        </h1>
        <p className="text-xl poppins-regular mb-4 p-1">
          AlwaysOn's Website Bot is trained on your organization's website while
          the Document Bot can be trained on any organizational documents. For
          further details, see videos below.
        </p>
        <div className="relative flex justify-center items-center w-full bg-transparent">
          <div className="flex-grow h-0 border-t border-white"></div>
          <img className="h-16 mx-4 my-4" src={logo2} alt="AlwaysOn logo" />
          <div className="flex-grow h-0 border-t border-white"></div>
        </div>

        {/* Buttons to toggle videos */}
        <div className="flex space-x-4 my-4">
          <button
            onClick={() => setSelectedVideo("website")}
            className={`px-4 py-2 text-white rounded ${
              selectedVideo === "website" ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            Show Website Bot
          </button>
          <button
            onClick={() => setSelectedVideo("document")}
            className={`px-4 py-2 text-white rounded ${
              selectedVideo === "document" ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            Show Document Bot
          </button>
        </div>

        {/* Conditionally render videos based on selection */}
        {selectedVideo === "website" && (
          <div className="website text-2xl sm:text-4xl alata-regular mt-2">
            <b>Website Bot&#9660;</b>
            <div className="video-container p-1 sm:p-8 mt-2 sm:mt-0">
              <video
                src={webBotVideo}
                className="video w-full sm:w-4/5 mx-auto rounded-lg"
                controls
                poster={webBotPoster}
              ></video>
            </div>
          </div>
        )}
        {selectedVideo === "document" && (
          <div className="document text-2xl sm:text-4xl alata-regular mt-2">
            <b>Document Bot&#9660;</b>
            <div className="video-container p-1 sm:p-8 my-2 sm:mt-0">
              <video
                src={docBotVideo}
                className="video w-full sm:w-4/5 mx-auto rounded-lg"
                controls
                poster={docBotPoster}
              ></video>
            </div>
          </div>
        )}
      </div>

      {/* SECTION 3 */}
      <div className="section-cb-3">
        {selectedBot === "website" && (
          <>
            <div className="flex-grow h-0 border-t border-gray-400"></div>
            <div className="flex flex-col sm:flex-row">
              <div className="flex justify-evenly flex-col-reverse items-start p-4">
                <ul className="text-lg sm:text-3xl open-sans-light text-left space-y-4">
                  <li>
                    <b>Turnkey:</b> Works instantly no setup required
                  </li>
                  <li>
                    <b>Custom:</b> Trained only on your organization's info
                  </li>
                  <li>
                    <b>Translation:</b> Communicates in multiple languages
                  </li>
                  <li>
                    <b>Training:</b> Improves with every interaction
                  </li>
                  <li>
                    <b>Multi-Chatbot:</b> Build different chatbots for each use
                    case
                  </li>
                </ul>
                <p className="text-lg sm:text-3xl open-sans-light text-left">
                  AlwaysOn website chatbot can be trained to use your
                  organization's website information to provide accurate
                  source-based answers that guide your community to the right
                  information 24/7.
                </p>
              </div>
              <div className="flex justify-center items-center text-left mt-2 sm:mt-0">
                <img
                  src={chatBot}
                  alt="Chat Bot top questions asked"
                  className="w-full rounded-lg mx-auto transform transition hover:scale-105 duration-300 cursor-pointer p-4"
                />
              </div>
            </div>
            <div className="flex-grow h-0 border-t border-gray-400"></div>
            <div className="flex flex-col sm:flex-row-reverse">
              <div className="flex flex-col-reverse justify-evenly items-start w-full sm:w-3/5 p-4">
                <ul className="text-lg sm:text-2xl open-sans-light text-left space-y-2">
                  <li>
                    <b>Usage Metrics:</b> Track total engagement and question
                    volume
                  </li>
                  <li>
                    <b>Question-Level Data:</b> See exact questions organized
                    into categories & topics
                  </li>
                  <li>
                    <b>Community Insights:</b> Identify the how and why behind
                    your community engagement
                  </li>
                </ul>
                <p className="text-lg sm:text-3xl open-sans-light text-left">
                  AlwaysOn chatbot analytics offer valuable insights into your
                  community's needs, helping you keep your website updated and
                  relevant.
                </p>
              </div>
              <div className="flex flex-row justify-center items-center text-left">
                <img
                  src={analytics2}
                  alt="Various analytics and charts detailing data insights such as questions asked, engagement, and more"
                  className="rounded-lg cursor-pointer p-4"
                />
              </div>
            </div>
          </>
        )}
        {selectedBot === "document" && (
          <>
            <div className="flex-grow h-0 border-t border-gray-400"></div>
            <div className="flex flex-col-reverse sm:flex-row">
              <div className="flex justify-evenly flex-col-reverse items-start p-4">
                <ul className="text-lg sm:text-3xl open-sans-light text-left space-y-4">
                  <li>
                    <b>Turnkey:</b> Works instantly no setup required
                  </li>
                  <li>
                    <b>Custom:</b> Trained only on your organization's info
                  </li>
                  <li>
                    <b>Translation:</b> Communicates in multiple languages
                  </li>
                  <li>
                    <b>Training:</b> Improves with every interaction
                  </li>
                  <li>
                    <b>Multi-Chatbot:</b> Build different chatbots for each use
                    case
                  </li>
                </ul>
                <p className="text-lg sm:text-3xl open-sans-light text-left">
                  AlwaysOn document chatbot can be trained to use your
                  organization's internal files and documents to provide
                  accurate source-based answers that guide your staff to the
                  right information 24/7.
                </p>
              </div>
              <div className="flex justify-center items-center text-left mt-2 sm:mt-0">
                <img
                  src={chatBot}
                  alt="Chat Bot top questions asked"
                  className="w-full rounded-lg mx-auto transform transition hover:scale-105 duration-300 cursor-pointer p-4"
                />
              </div>
            </div>
            <div className="flex-grow h-0 border-t border-gray-400"></div>
            <div className="flex flex-col-reverse sm:flex-row-reverse">
              <div className="flex flex-col-reverse justify-evenly items-start w-3/5 p-4">
                <ul className="text-lg sm:text-2xl open-sans-light text-left space-y-2">
                  <li>
                    <b>Usage Metrics:</b> Track total engagement and question
                    volume
                  </li>
                  <li>
                    <b>Question-Level Data:</b> See exact questions organized
                    into categories & topics
                  </li>
                  <li>
                    <b>Community Insights:</b> Identify the how and why behind
                    your community engagement
                  </li>
                </ul>
                <p className="text-lg sm:text-3xl open-sans-light text-left">
                  AlwaysOn chatbot analytics offer valuable insights into your
                  community's needs, helping you keep your website updated and
                  relevant.
                </p>
              </div>
              <div className="flex flex-row justify-center items-center text-left">
                <img
                  src={analytics2}
                  alt="Various analytics and charts detailing data insights such as questions asked, engagement, and more"
                  className="rounded-lg cursor-pointer p-4"
                />
              </div>
            </div>
          </>
        )}
        <div className="content-container-cb text-center">
          <h1 className="text-xl sm:text-6xl uppercase poppins-bold p-6 sm:p-12 text-black">
            Explore the power of AlwaysOn
          </h1>
          <div className="free-trial flex-row">
            <button
              className="border-2 border-white bg-white text-black rounded-lg p-2 sm:p-6 freeman-regular uppercase text-lg sm:text-3xl"
              onClick={() => window.open("/contact-us", "_blank")}
              aria-label="Link to calendly to book an appointment"
            >
              <span>Schedule a demo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;