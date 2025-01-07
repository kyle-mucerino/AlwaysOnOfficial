import React from "react";
import "./security.css";

function Security() {
  return (
    <>
      <div className="section-sa-1 flex flex-row justify-evenly items-center border-b-2 border-black border-t-2">
        <div className="flex flex-col justify-evenly text-left p-6 sm:ml-12">
          <h1 className="text-3xl sm:text-8xl poppins-bold mb-0 sm:mb-4">
            Security & Accessibility
          </h1>
          <p className="text-lg sm:text-4xl open-sans-light sm:leading-10">
            AlwaysOn values both security & accessibility in order to provide
            the best customer experience possible. See how we protect your data
            and make our chatbot accessible to all users:
          </p>
        </div>
      </div>
      <div className="relative hidden sm:flex justify-center items-center bg-white w-full p-4">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 fading"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="ALwaysOn logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      <div className="section-sa-2">
        <div className="flex flex-col sm:flex-row p-2 sm:space-y-0 space-y-2 sm:space-x-2">
          <div className="flex flex-col w-full sm:w-1/2 p-4 border-black border-2 rounded-lg security">
            <h1 className="text-xl sm:text-7xl poppins-bold mb-4">Security</h1>
            <ul className="text-left space-y-4">
              <li className="text-md sm:text-3xl open-sans-light">
                <b>Data Privacy:</b> No personal data/information collection
              </li>
              <li className="text-md sm:text-3xl open-sans-light">
                <b>Integrations:</b> No direct integrations/systems access
              </li>
              <li className="text-md sm:text-3xl open-sans-light">
                <b>Servers:</b> Chatbot runs directly from our servers
              </li>
              <li className="text-md sm:text-3xl open-sans-light">
                <b>Chatbot Implementation:</b> Website: embed code
                <br /> or App: iframe
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-evenly w-full sm:w-1/2 p-4 border-black border-2 rounded-lg accessibility">
            <h1 className="text-xl sm:text-7xl poppins-bold mb-0 sm:mb-4">
              Accessibility
            </h1>
            <ul className="text-left space-y-4">
              <li className="text-md sm:text-3xl open-sans-light">
                ADA compliant
              </li>
              <li className="text-md sm:text-3xl open-sans-light">
                Screen reader compatible
              </li>
              <li className="text-md sm:text-3xl open-sans-light">
                Follow the latest Web Content Accessibility Guidlines (WCAG)
              </li>
              <li className="text-md sm:text-3xl open-sans-light">
                12 supported languages (& more translation options coming)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

}

export default Security;