import React from "react";
import "../Contact/contact.css";
import chatBot from "../../assets/AOChatBot.png";
import { TextGenerateEffect } from "../TextGenerateEffect";
import ContactUsVideo from "../../assets/Contact Us.mp4";
import logo2 from "../../assets/logo2.png";

function Contact() {
  return (
    <>
      <div className="section-cu-1 flex flex-col sm:flex-row justify-evenly items-center border-b-2 border-black border-t-2">
        <div className="flex flex-col justify-evenly text-center sm:text-left mx-2 sm:ml-12">
          <h1 className="text-2xl sm:text-7xl poppins-bold my-2 sm:mb-4">
            Contact Us Routing
          </h1>
          <TextGenerateEffect
            words="Give your community an easy way to connect with staff and get help."
            className="text-lg sm:text-4xl open-sans-light"
            duration={0.5}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div>
            <video
              src={ContactUsVideo}
              alt="gif"
              className="w-4/5 rounded-lg mx-auto p-2"
              controls
            />
          </div>
        </div>
        <div className="relative sm:hidden flex justify-center items-center w-full bg-transparent">
          <div className="flex-grow h-0 border-t border-white"></div>
          <img className="h-16 mx-4 my-4" src={logo2} alt="Logo" />
          <div className="flex-grow h-0 border-t border-white"></div>
        </div>
      </div>
      <div className="section-cu-3 p-4 space-y-4">
        <div className="flex flex-row">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-row justify-center items-center text-left">
            <div className="text-xl sm:text-7xl sm:mr-2">&#x2190;</div>
            <h1 className="text-xl sm:text-5xl poppins-bold mb-4 leading-normal">
              Build topic & recipient list
            </h1>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-xl sm:text-5xl poppins-bold mb-4 leading-normal">
              Questions submitted to staff by topic
            </h1>
            <div className="text-xl sm:text-7xl sm:mr-2">&#x2192;</div>
          </div>
        </div>
        <div className="flex flex-row section-cb-3">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="text-xl sm:text-7xl sm:mr-2">&#x2190;</div>
            <h1 className="text-xl sm:text-5xl poppins-bold mb-4 leading-normal">
              Track interactions & collect feedback
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
