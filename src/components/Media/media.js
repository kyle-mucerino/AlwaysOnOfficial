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
        <div className="section-mm-1 flex flex-row justify-start items-center border-y-2 border-black">
          <div className="flex flex-col justify-evenly text-left p-8 sm:mx-0 sm:ml-12">
            <h1 className="text-3xl sm:text-8xl poppins-bold mb-0 sm:mb-4">
              Media & Materials
            </h1>
            <p className="text-lg sm:text-4xl open-sans-light">
              A powerful AI chatbot in the center of a customer service platform
            </p>
          </div>
        </div>

        {/* PDF Section */}
        <div className="flex flex-col-reverse sm:flex-row pdf-section section-mm-2 p-8">
          <img
            src={onePagerImg}
            alt="PDF Preview"
            className="pdf-thumbnail cursor-pointer transform transition hover:scale-105 duration-300"
            onClick={toggleModal}
          />
          <div className="flex flex-col justify-evenly items-start text-left p-0 sm:p-8">
            <h1 className="text-2xl sm:text-7xl poppins-bold">
              Why AO Chatbots?
            </h1>
            <p className="text-lg sm:text-3xl open-sans-light">
              AI chatbots improve website efficiency by providing instant and
              personalized responses, reducing manual support efforts, and
              enhancing the user experience.
            </p>
            <h1 className="text-2xl sm:text-7xl poppins-bold sm:mb-4 mt-4 sm:mt-0">
              Why AlwaysOn?
            </h1>
            <p className="hidden sm:block text-lg sm:text-3xl open-sans-light">
              <b>Mission Focused:</b> Our AI has built-in school expertise and
              is trained only to answer questions sourcing your school website.
            </p>
            <p className="hidden sm:block text-xl sm:text-3xl open-sans-light">
              <b>Customer Centric:</b> Customized to support the needs and use
              cases that matter most to your school and stakeholders.
            </p>
            <p className="hidden sm:block text-lg sm:text-3xl open-sans-light">
              <b>User Friendly:</b> Chatbot works out-of-the-box, we launch
              within 24 hours and train your chatbot to improve with every
              question asked.
            </p>
            <p className="block text-lg sm:text-3xl open-sans-light">
              <b>Mission Focused:</b> Our AI has built-in school expertise and
              is trained only to answer questions sourcing your school website.
            </p>
            <p className="text-xl sm:text-3xl open-sans-light">
              <b>Customer Centric:</b> Customized to support the needs and use
              cases that matter most to your school and stakeholders.
            </p>
            <p className="text-lg sm:text-3xl open-sans-light">
              <b>User Friendly:</b> Chatbot works out-of-the-box, we launch
              within 24 hours and train your chatbot to improve with every
              question asked.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="pdf-modal">
          <div className="pdf-modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <iframe src={onePager} width="100%" title="PDF Viewer"></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Media;
