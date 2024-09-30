import React from "react";
import chatBot from "../../assets/AOChatBot.png";
import "./chatbot.css";

function Chatbot() {
  return (
    <>
      <div className="section-cb-1 flex flex-row justify-evenly items-center">
        <div className="flex flex-col justify-evenly text-left ml-12">
          <h1 className="text-8xl alata-regular mb-4">AI-Chatbot </h1>
          <p className="text-4xl saira-medium">
            A powerful AI chatbot in the center of a customer service platform
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div>
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
        </div>
      </div>
      <div className="section-cb-2 flex justify-center items-center border-b-4 border-black">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-7xl alata-regular mb-4">Who's it for?</h1>
          <p className="text-4xl saira-medium">
            Description of feature value and why the feature is important
          </p>
        </div>
      </div>
      <div className="section-cb-3 p-4">
        <div className="flex flex-row">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl alata-regular mb-4">Element Name</h1>
            <p className="text-4xl saira-medium">
              Description of element and why the element is important
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl alata-regular mb-4">Element Name</h1>
            <p className="text-4xl saira-medium">
              Description of element and why the element is important
            </p>
          </div>
        </div>
        <div className="flex flex-row section-cb-3">
          <div className="flex justify-center items-center">
            <img src={chatBot} alt="gif" className="w-1/2 rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl alata-regular mb-4">Element Name</h1>
            <p className="text-4xl saira-medium">
              Description of element and why the element is important
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;