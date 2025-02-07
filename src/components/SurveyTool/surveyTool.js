import React from "react";
import "../SurveyTool/surveyTool.css";
import chatBot from "../../assets/AOChatBot.png";
import { TextGenerateEffect } from "../TextGenerateEffect";
import SurveyToolVideo from "../../assets/Survey Tool (5).mp4";
import surveygif1 from "../../assets/Survey Step 1.gif";
import surveygif2 from "../../assets/Survey Step 2.gif";
import surveygif3 from "../../assets/Survey Step 3.gif";
import logo2 from "../../assets/logo2.png";
import surveyToolPoster from "../../assets/surveyToolPoster.png";

function SurveyTool() {
  return (
    <>
      <div className="section-st-1 flex flex-col sm:flex-row justify-evenly items-center sm:border-b-2 border-black border-t-2">
        <div className="flex flex-col justify-evenly text-center sm:text-left mx-2 sm:ml-12 my-4 sm:my-0">
          <h1 className="text-3xl sm:text-8xl poppins-bold mb-2 sm:mb-4">
            Survey Tool
          </h1>
          <TextGenerateEffect
            words="Create simple surveys to get quick & easy feedback from your community."
            className="text-lg sm:text-4xl open-sans-light"
            duration={0.5}
          />
        </div>
        <div className="flex flex-row justify-center items-center my-2 sm:my-0">
          <div>
            <video
              src={SurveyToolVideo}
              alt="Video desrcibing functionality of AlwaysOn's Survey Tool"
              className="w-4/5 mx-auto rounded-lg"
              controls
              playsInline
              poster={surveyToolPoster}
            />
          </div>
        </div>
        <div className="relative sm:hidden flex justify-center items-center w-full bg-transparent">
          <div className="flex-grow h-0 border-t border-white"></div>
          <img className="h-16 mx-4 my-4" src={logo2} alt="AlwaysOn logo" />
          <div className="flex-grow h-0 border-t border-white"></div>
        </div>
      </div>
      <div className="relative hidden sm:flex justify-center items-center bg-white w-full">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 fading my-10"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="AlwaysOn logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      <div className="section-st-3 space-y-16">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
          <img
            src={surveygif1}
            alt="gif showing survery within the platform"
            className="w-full sm:w-1/2 rounded-lg p-4"
          />
          <div className="hidden sm:flex justify-center items-center">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">
              Build Survey
            </h1>
          </div>
          <div className="sm:hidden flex justify-center items-center mt-4">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">
              Build Survey
            </h1>
          </div>
        </div>
        <div className="flex-grow h-0 border-t border-grey"></div>
        <div className="flex flex-col-reverse sm:flex-row-reverse justify-center items-center">
          <img
            src={surveygif2}
            alt="gif showing chatbot deployment within the platform"
            className="w-full sm:w-1/2 rounded-lg p-4"
          />
          <div className="hidden sm:flex justify-center items-center">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">
              Deploy it
            </h1>
          </div>
          <div className="sm:hidden flex justify-center items-center">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">Deploy it</h1>
          </div>
        </div>
        <div className="flex-grow h-0 border-t border-grey"></div>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
          <img
            src={surveygif3}
            alt="gif showing analytics reports within the platform"
            className="w-full sm:w-1/2 rounded-lg p-4"
          />
          <div className="hidden sm:flex justify-center items-center">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">
              View Analytics
            </h1>
          </div>
          <div className="sm:hidden flex justify-center items-center">
            <h1 className="text-xl sm:text-6xl poppins-bold mb-4">
              View Analytics
            </h1>
          </div>
        </div>
        <div className="content-container-st text-center">
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

export default SurveyTool;