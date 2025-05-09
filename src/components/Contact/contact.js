import React from "react";
import "../Contact/contact.css";
import chatBot from "../../assets/AOChatBot.png";
import cbpg1 from "../../assets/cbpg1.png";
import cbpg2 from "../../assets/cbpg2.png";
import cbpg3 from "../../assets/cbpg3.png";
import { TextGenerateEffect } from "../TextGenerateEffect";
import ContactUsVideo from "../../assets/Contact Us Routing.mp4";
import logo2 from "../../assets/Apptegy AlwaysOn.png";
import contactPoster from "../../assets/contactUsPoster.png";

function Contact() {
  return (
    <>
      <div className="section-cu-1 flex flex-col sm:flex-row justify-evenly items-center border-b-2 border-black border-t-2">
        <div className="flex flex-col justify-evenly text-center sm:text-left mx-2 sm:ml-12">
          <h1 className="text-2xl sm:text-7xl poppins-bold my-2 sm:mb-4">
            Contact Us Routing
          </h1>
          <TextGenerateEffect
            words="Give your community an easy way to connect with staff."
            className="text-lg sm:text-4xl open-sans-light"
            duration={0.5}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div>
            <video
              src={ContactUsVideo}
              alt="Video describing functionality of AlwaysOn's Contact Us Routing"
              className="w-4/5 rounded-lg mx-auto p-2"
              controls
              poster={contactPoster}
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
          className="h-36 mx-4 my-10"
          src={logo2}
          alt="AlwaysOn logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      <div className="section-cu-3 space-y-4">
        <div className="flex flex-col-reverse sm:flex-row p-4">
          <div className="flex justify-center items-center">
            <img src={cbpg1} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-xl sm:text-5xl poppins-bold mb-4 leading-normal">
              Build topic & recipient list
            </h1>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row-reverse p-4">
          <div className="flex flex-col-reverse sm:justify-center items-center">
            <img
              src={cbpg2}
              alt="AlwaysOn Chatbot"
              className="w-1/2 rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-xl sm:text-5xl poppins-bold mb-4 leading-normal">
              Questions submitted to staff by topic
            </h1>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row p-4">
          <div className="flex justify-center items-center">
            <img
              src={cbpg3}
              alt="AlwaysOn Chatbot"
              className="w-1/2 rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-xl sm:text-5xl poppins-bold mb-4 leading-normal">
              Track interactions & collect feedback
            </h1>
          </div>
        </div>
        <div className="content-container-cu text-center">
          <h1 className="text-xl sm:text-6xl uppercase poppins-bold p-6 sm:p-12 text-black">
            Explore the power of AlwaysOn
          </h1>
          <div className="free-trial flex-row">
            <button
              className="border-2 border-white bg-white text-black rounded-lg p-2 sm:p-6 freeman-regular uppercase text-lg sm:text-3xl"
              onClick={() => (window.location.href = "/contact-us")}
              aria-label="Schedule a demo"
            >
              <span>Schedule demo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
