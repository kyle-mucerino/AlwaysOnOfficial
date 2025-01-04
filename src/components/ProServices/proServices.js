import React from "react";
import "../ProServices/proServices.css";
import chatBot from "../../assets/AOChatBot.png";
import { TextGenerateEffect } from "../TextGenerateEffect";
import ProfessionalServicesVideo from "../../assets/Professional Services.mp4";
import service from "../../assets/service.png";
import ai from "../../assets/artificial-intelligence (1).png";
import performance from "../../assets/performance-review.png";
import logo2 from "../../assets/logo2.png";


function ProServices() {
  return (
    <>
      <div className="section-ps-1 flex flex-col sm:flex-row justify-evenly items-center border-b-2 border-black">
        <div className="flex flex-col justify-evenly text-center sm:text-left mx-2 sm:mx-0 sm:ml-12 mt-2 sm:mt-0">
          <h1 className="text-2xl sm:text-7xl poppins-bold mb-2 sm:mb-4">
            Professional Services
          </h1>
          <TextGenerateEffect
            words="We help you every step of the way to get the most out of our platform."
            className="text-xl sm:text-4xl open-sans-light mb-2 sm:mb-0"
            duration={0.5}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div>
            <video
              src={ProfessionalServicesVideo}
              alt="gif"
              className="w-4/5 rounded-lg mx-auto"
              controls
            />
          </div>
        </div>
        <div className="relative flex sm:hidden justify-center items-center w-full bg-transparent">
          <div className="flex-grow h-0 border-t border-white"></div>
          <img className="h-16 mx-4 my-4" src={logo2} alt="Logo" />
          <div className="flex-grow h-0 border-t border-white"></div>
        </div>
      </div>
      <div className="relative hidden sm:flex justify-center items-center bg-white w-full">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 fading my-10"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="Logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      <div className="section-ps-3">
        <div className="flex flex-row p-4">
          <div className="flex justify-center items-center">
            <img
              src={performance}
              alt="gif"
              className="w-3/5 rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl sm:text-7xl poppins-bold mb-4">
              &#x2190;Data Reviews
            </h1>
          </div>
        </div>
        <div className="flex flex-row-reverse p-4">
          <div className="flex justify-center items-center">
            <img src={ai} alt="gif" className="w-3/5 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl sm:text-7xl poppins-bold mb-4">
              ChatBot Training&#x2192;
            </h1>
          </div>
        </div>
        <div className="flex flex-row p-4">
          <div className="flex justify-center items-center">
            <img src={service} alt="gif" className="w-3/5 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl sm:text-7xl poppins-bold mb-4">
              &#x2190;Unlimited Support
            </h1>
          </div>
        </div>
        <div className="content-container-ps text-center">
          <h1 className="text-xl sm:text-6xl uppercase poppins-bold p-6 sm:p-12 text-black">
            Explore the power of AlwaysOn
          </h1>
          <div className="free-trial flex-row">
            <button className="border-2 border-white bg-white text-black rounded-lg p-2 sm:p-6 freeman-regular uppercase text-lg sm:text-3xl">
              <span>Schedule a demo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProServices;
