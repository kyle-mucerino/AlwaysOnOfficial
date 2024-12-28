import React from "react";
import "../SurveyTool/surveyTool.css";
import chatBot from "../../assets/AOChatBot.png";
import { TextGenerateEffect } from "../TextGenerateEffect";
import SurveyToolVideo from "../../assets/Survey Tool.mp4";
import surveygif1 from "../../assets/surveygif1.gif";
import logo2 from "../../assets/logo2.png";

function SurveyTool() {
  return (
    <>
      <div className="section-st-1 flex flex-col sm:flex-row justify-evenly items-center sm:border-b-2 border-black border-t-2">
        <div className="flex flex-col justify-evenly text-center sm:text-left mx-2 sm:ml-12 my-4 sm:my-0">
          <h1 className="text-3xl sm:text-8xl poppins-bold mb-2 sm:mb-4">Survey Tool</h1>
          <TextGenerateEffect
            words="Dynamic, pulse check surveys to get quick & easy feedback from your community."
            className="text-lg sm:text-4xl open-sans-light"
            duration={0.5}
          />
        </div>
        <div className="flex flex-row justify-center items-center my-2 sm:my-0">
          <div>
            <video
              src={SurveyToolVideo}
              alt="gif"
              className="w-4/5 mx-auto rounded-lg"
              controls
            />
          </div>
        </div>
        <div className="relative sm:hidden flex justify-center items-center w-full bg-transparent">
          <div className="flex-grow h-0 border-t border-white"></div>
          <img
            className="h-16 mx-4 my-4"
            src={logo2}
            alt="Logo"
          />
          <div className="flex-grow h-0 border-t border-white"></div>
        </div>
      </div>
      <div className="section-st-3 p-4">
        <div className="flex flex-row">
          <div className="flex justify-center items-center">
            <img
              src={surveygif1}
              alt="gif"
              className="w-1/2 rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">
              &#x2190;Build Survey
            </h1>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="flex justify-center items-center">
            <img
              src={surveygif1}
              alt="gif"
              className="w-1/2 rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">
              Deploy it&#x2192;
            </h1>
          </div>
        </div>
        <div className="flex flex-row section-cb-3">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">
              &#x2190;View Analytics
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurveyTool;