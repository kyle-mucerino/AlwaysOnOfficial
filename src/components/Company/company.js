import React from "react";
import "../Company/company.css";

function Company() {
  return (
    <>
      <div className="section-cy-1 flex flex-row justify-evenly items-center border-b-2 border-black">
        <div className="flex flex-col justify-evenly text-left ml-12">
          <h1 className="text-8xl alata-regular mb-4">Company</h1>
          <p className="text-4xl saira-medium">
            A powerful AI chatbot in the center of a customer service platform
          </p>
        </div>
      </div>
      <div className="section-cy-2 flex justify-center items-center">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-7xl alata-regular mb-4">Who's it for?</h1>
          <p className="text-4xl saira-medium">
            Description of feature value and why the feature is important
          </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center bg-white w-full">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="Logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      <div className="section-cy-3 p-4">
      </div>
    </>
  );
}

export default Company;