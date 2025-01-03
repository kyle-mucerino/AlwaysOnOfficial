import React, { useState } from "react";
import "./chatbot.css";
import webBotVideo from "../../assets/webBotVideo.mp4";
import docBotVideo from "../../assets/docBotVideo.mp4";
import { FlipWordsDemo } from "../FlipWordsDemo2";
import analytics2 from "../../assets/Analytics (2).png";
import chatBot from "../../assets/AOChatBot.png";
import logo2 from "../../assets/logo2.png";

function Chatbot() {
  const [selectedBot, setSelectedBot] = useState("website");
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
                Uses your website as its sole knowledge base to answer questions
                and guide users to the right information. See below for more
                details.
              </p>
              <button>Learn More</button>
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
                Trained exclusively on internal documents, it answers questions
                with precision and accuracy. See below for more details.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-02 hidden sm:flex flex-col items-center justify-center">
        {selectedBot === "website" && (
          <>
            <div className="website text-2xl sm:text-4xl alata-regular">
              Intelligent, multilingual, insightful chatbot trained on your
              organization's <span>website</span>
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
        <h1 className="text-xl poppins-regular my-4 p-1">
          AlwaysOn's Website Bot is trained on your organization's website while
          the Document Bot can be trained on any organizational documents. For
          further details, see videos below!
        </h1>
        <div className="relative flex justify-center items-center w-full bg-transparent">
          <div className="flex-grow h-0 border-t border-white"></div>
          <img className="h-16 mx-4 my-4" src={logo2} alt="Logo" />
          <div className="flex-grow h-0 border-t border-white"></div>
        </div>
        <div className="website text-2xl sm:text-4xl alata-regular mt-2">
          <b>Website Bot&#9660;</b>
        </div>
        <div className="video-container p-1 sm:p-8 mt-2 sm:mt-0">
          <video
            src={webBotVideo}
            className="video w-full sm:w-4/5 mx-auto rounded-lg"
            controls
          ></video>
        </div>
        <div className="document text-2xl sm:text-4xl alata-regular mt-2">
          <b>Document Bot&#9660;</b>
        </div>
        <div className="video-container p-1 sm:p-8 my-2 sm:mt-0">
          <video
            src={docBotVideo}
            className="video w-full sm:w-4/5 mx-auto rounded-lg"
            controls
          ></video>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="section-cb-3 p-4">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <div className="flex flex-col-reverse sm:flex-row-reverse">
          <div className="flex justify-center">
            <img
              src={chatBot}
              alt="Chat Bot top questions asked"
              className="w-1/2 rounded-lg mx-auto transform transition hover:scale-105 duration-300 cursor-pointer p-4"
            />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-right w-full s:w-2/5 mt-2 sm:mt-0">
            <h1 className="text-2xl sm:text-7xl poppins-bold mb-4">
              Self-Learning
            </h1>
            <p className="text-lg sm:text-4xl open-sans-light">
              Chatbot is trained to improve with every question asked
            </p>
          </div>
        </div>
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <div className="flex flex-col-reverse sm:flex-row section-cb-3">
          <div className="flex justify-center items-center">
            <img
              src={analytics2}
              alt="gif"
              className="rounded-lg transform transition hover:scale-105 duration-300 cursor-pointer p-4"
            />
          </div>
          <div className="flex flex-col justify-center text-center sm:text-left w-full s:w-3/5 p-2">
            <h1 className="text-2xl sm:text-7xl poppins-bold mb-4">
              Insightful Analytics
            </h1>
            <p className="text-lg sm:text-4xl open-sans-light">
              Chatbot analytics provide unique insights and question-level data
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;