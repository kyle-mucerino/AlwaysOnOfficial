import React, { useState } from "react";
import "./media.css";
import onePager from "../../assets/onePager.pdf";
import onePagerImg from "../../assets/onePager.png";

function Media() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={isOpen ? "blur-background" : ""}>
        {/* Sections */}
        <div className="section-mm-1 flex flex-row justify-start items-center border-b-2 border-black">
          <div className="flex flex-col justify-evenly text-left ml-12">
            <h1 className="text-8xl poppins-bold mb-4">Media & Materials</h1>
            <p className="text-4xl open-sans-light">
              A powerful AI chatbot in the center of a customer service platform
            </p>
          </div>
        </div>

        {/* PDF Section */}
        <div className="flex flex-row pdf-section section-mm-2 p-8">
          <img
            src={onePagerImg}
            alt="PDF Preview"
            className="pdf-thumbnail"
            onClick={toggleModal}
          />
          <div className="flex flex-col justify-evenly items-start text-left p-4">
            <h1 className="text-7xl poppins-bold">Why AO Chatbots?</h1>
            <p className="text-3xl open-sans-light">
              AI chatbots improve website efficiency by providing instant and
              personalized responses, reducing manual support efforts, and
              enhancing the user experience.
            </p>
            <h1 className="text-7xl poppins-bold mb-4">Why AlwaysOn?</h1>
            <p className="text-3xl open-sans-light">
              <b>Mission Focused:</b> Our AI has built-in school expertise and
              is trained only to answer questions sourcing your school website.
            </p>
            <p className="text-3xl open-sans-light">
              <b>Customer Centric:</b> Customized to support the needs and use
              cases that matter most to your school and stakeholders.
            </p>
            <p className="text-3xl open-sans-light">
              <b>User Friendly:</b> Chatbot works out-of-the-box, we launch
              within 24 hours and train your chatbot to improve with every
              question asked.
            </p>
          </div>
        </div>

        {/* Section mm-3 */}
        <div className="section-mm-3 relative flex justify-center items-center bg-white w-full">
          <div className="flex-grow h-0 border-t border-gray-400"></div>
          <img
            className="h-36 mx-4 mb-4 fading"
            src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
            alt="Logo"
          />
          <div className="flex-grow h-0 border-t border-gray-400"></div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="pdf-modal">
          <div className="pdf-modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <iframe
              src={onePager}
              width="100%"
              height="500px"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Media;
