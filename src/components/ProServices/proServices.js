import React from "react";
import "../ProServices/proServices.css";
import chatBot from "../../assets/AOChatBot.png";
import { TextGenerateEffect } from "../TextGenerateEffect";
import ProfessionalServicesVideo from "../../assets/Professional Services.mp4";
import service from "../../assets/service.png";
import ai from "../../assets/artificial-intelligence (1).png";
import performance from "../../assets/performance-review.png";


function ProServices() {
  return (
    <>
      <div className="section-ps-1 flex flex-row justify-evenly items-center border-b-2 border-black">
        <div className="flex flex-col justify-evenly text-left ml-12">
          <h1 className="text-7xl poppins-bold mb-4">Professional Services</h1>
          <TextGenerateEffect
            words="We help you every step of the way to get the most out of the platform with the least amount of work."
            className="text-4xl open-sans-light"
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
      {/* <div className="section-ps-2 flex justify-center items-center">
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
      </div> */}
      <div className="section-ps-3 p-4">
        <div className="flex flex-row">
          <div className="flex justify-center items-center">
            <img
              src={performance}
              alt="gif"
              className="w-3/5 rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl poppins-bold mb-4">&#x2190;Data Reviews</h1>
            {/* <p className="text-4xl open-sans-light">
              Description of element and why the element is important
            </p> */}
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="flex justify-center items-center">
            <img src={ai} alt="gif" className="w-3/5 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl poppins-bold mb-4">
              ChatBot Training&#x2192;
            </h1>
            {/* <p className="text-4xl open-sans-light">
              Description of element and why the element is important
            </p> */}
          </div>
        </div>
        <div className="flex flex-row section-cb-3">
          <div className="flex justify-center items-center">
            <img src={service} alt="gif" className="w-3/5 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl poppins-bold mb-4">
              &#x2190;Unlimited Support
            </h1>
            {/* <p className="text-4xl open-sans-light">
              Description of element and why the element is important
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProServices;
