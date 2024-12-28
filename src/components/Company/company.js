import React from "react";
import "../Company/company.css";

function Company() {
  return (
    <>
      <div className="section-cy-1 flex flex-row items-center border-y-2 border-black">
        <div className="flex flex-col text-left p-4 sm:p-12 my-4 sm:my-0">
          <h1 className="text-3xl sm:text-8xl poppins-bold sm:mb-4">AlwaysOn</h1>
          <p className="text-xl sm:text-5xl open-sans-light">About the company</p>
        </div>
      </div>
      <div className="section-cy-2 flex justify-center items-center">
        <div className="flex flex-col justify-center text-left p-4 sm:p-12">
          <p className="text-md sm:text-4xl open-sans-light">
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
    </>
  );
}

export default Company;