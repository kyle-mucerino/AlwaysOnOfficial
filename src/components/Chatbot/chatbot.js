import React, { useState } from "react";
import "./chatbot.css";
import selfLearning from "../../assets/AOTopQs.png";
import analyitcs from "../../assets/analytics.png";
import content1 from "../../assets/content1.png";
import content2 from "../../assets/content2.png";
import webBotVideo from "../../assets/webBotVideo.mp4";
import docBotVideo from "../../assets/docBotVideo.mp4";
import { FlipWordsDemo } from "../FlipWordsDemo2";

function Chatbot() {
  const [selectedBot, setSelectedBot] = useState("website");
  return (
    <>
      {/* SECTION 1 */}
      <div className="section-cb-01 flex flex-col justify-center items-center">
        <div className="text-2xl open-sans-light p-4 font-bold">
          <FlipWordsDemo />
          {/* AlwaysOn chatbot can be launched within 24 hours, is trained only on
          your information, available in 30+ languages, and improves with every
          interaction. */}
        </div>
        <div className="container flex justify-center items-center">
          <div
            className="box flex justify-center items-center"
            onClick={() => setSelectedBot("website")}
          >
            <span></span>
            <div className="content">
              <h2>Website Bot</h2>
              <p>
                Uses your website as its sole knowledge base to answer questions and guide users to the right information. See below for more details.
              </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="box" onClick={() => setSelectedBot("document")}>
            <span></span>
            <div className="content">
              <h2>Document Bot</h2>
              <p>
                Trained exclusively on internal documents, it answers questions with precision and accuracy. See below for more details. 
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-02 flex flex-col items-center justify-center">
        {selectedBot === "website" && (
          <>
            <div className="website text-4xl alata-regular">
              A chatbot trained on your organization's <span>website</span>
              <b>&#9660;</b>
            </div>
            <div className="video-container p-8">
              <video src={webBotVideo} className="video w-4/5 mx-auto" controls></video>
            </div>
          </>
        )}
        {selectedBot === "document" && (
          <>
            <div className="document text-4xl alata-regular">
              A chatbot trained on your organization's <span>documents</span><b>&#9660;</b>
            </div>
            <div className="video-container p-8">
              <video src={docBotVideo} className="video w-4/5 mx-auto" controls></video>
            </div>
          </>
        )}
      </div>
      <div className="relative flex justify-center items-center w-full bg-white">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 mt-4 fading"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="Logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      <div className="section-cb-3 p-4">
        <div className="flex flex-row">
          <div className="flex justify-center items-center">
            <img
              src={content1}
              alt="gif"
              className="w-4/5 rounded-lg mx-auto transform transition hover:scale-105 duration-300 cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={content2}
              alt="gif"
              className="w-4/5 rounded-lg mx-auto transform transition hover:scale-105 duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center items-start text-left">
            <h1 className="text-6xl poppins-bold mb-4">Content-Driven</h1>
            <p className="text-4xl open-sans-light">
              Chatbot answers questions using your website information only
            </p>
          </div>
        </div>
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <div className="flex flex-row-reverse">
          <div className="flex justify-center">
            <img
              src={selfLearning}
              alt="Chat Bot top questions asked"
              className="w-4/5 rounded-lg ml-auto transform transition hover:scale-105 duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center items-end text-right">
            <h1 className="text-7xl poppins-bold mb-4">Self-Learning</h1>
            <p className="text-4xl open-sans-light">
              Chatbot is trained to improve with every question asked
            </p>
          </div>
        </div>
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <div className="flex flex-row section-cb-3">
          <div className="flex justify-center items-center">
            <img
              src={analyitcs}
              alt="gif"
              className="w-4/5 rounded-lg mr-auto transform transition hover:scale-105 duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-7xl poppins-bold mb-4">Insightful Analytics</h1>
            <p className="text-4xl open-sans-light">
              Chatbot analytics provide unique insights and question-level data
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;