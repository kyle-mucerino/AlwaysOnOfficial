import React from "react";
import "../Company/company.css";

function Company() {
  return (
    <>
      <div className="section-cy-1 flex flex-row items-center border-b-2 border-black">
        <div className="flex flex-col justify-evenly text-left p-12">
          <h1 className="text-8xl poppins-bold mb-4">AlwaysOn</h1>
          <p className="text-4xl open-sans-light">About the company</p>
        </div>
      </div>
      <div className="section-cy-2 flex justify-center items-center">
        <div className="flex flex-col justify-center text-left p-12">
          {/* <h1 className="text-7xl poppins-bold mb-4">Who's it for?</h1> */}
          <p className="text-4xl open-sans-light">
            AlwaysOn, Inc. was founded in 2021 and is based in Newport
            Beach,California. We are a K-12 company focused on helping schools
            provide the best customer service to their stakeholders. Our goal is
            to help schools maximize the capacity of their staff and make
            critical information accessible to the entire school community,
            instantly 24/7. We are a current sponsor of CalSPRA, KanSPRA, TSPRA,
            WSPRA (WA & WI), and NSPRA. We are also an approved Monroe 2 BOCES
            vendor in New York.
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
      </div>
    </>
  );
}

export default Company;