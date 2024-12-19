import React from "react";
import "../SurveyTool/surveyTool.css";
import chatBot from "../../assets/AOChatBot.png";
import { TextGenerateEffect } from "../TextGenerateEffect";
import SurveyToolVideo from "../../assets/Survey Tool.mp4";

function SurveyTool() {
  return (
    <>
      <div className="section-st-1 flex flex-row justify-evenly items-center border-b-2 border-black">
        <div className="flex flex-col justify-evenly text-left ml-12">
          <h1 className="text-8xl poppins-bold mb-4">Survey Tool</h1>
          <TextGenerateEffect
            words="Build surveys and deploy them in-chatbot, in-person, or on website (+ analytics)"
            className="text-4xl open-sans-light"
            duration={0.5}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div>
            <video
              src={SurveyToolVideo}
              alt="gif"
              className="w-4/5 mx-auto rounded-lg"
              controls
            />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center bg-white w-full">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 fading my-10"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="Logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      {/* <div className="section-st-2 flex justify-center items-center">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-7xl poppins-bold mb-4">Who's it for?</h1>
          <p className="text-4xl open-sans-light">
            Description of feature value and why the feature is important
          </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center bg-white w-full">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 fading"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="Logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      <div className="section-st-3 p-4">
        <div className="flex flex-row">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl poppins-bold mb-4">Element Name</h1>
            <p className="text-4xl open-sans-light">
              Description of element and why the element is important
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl poppins-bold mb-4">Element Name</h1>
            <p className="text-4xl open-sans-light">
              Description of element and why the element is important
            </p>
          </div>
        </div>
        <div className="flex flex-row section-cb-3">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl poppins-bold mb-4">Element Name</h1>
            <p className="text-4xl open-sans-light">
              Description of element and why the element is important
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SurveyTool;