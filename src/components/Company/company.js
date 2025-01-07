import React from "react";
import "../Company/company.css";

function Company() {
  return (
    <>
      <div className="section-cy-1 flex flex-row items-center border-y-2 border-black">
        <div className="flex flex-col text-left p-4 sm:p-12 my-4 sm:my-0">
          <h1 className="text-3xl sm:text-8xl poppins-bold sm:mb-4">
            AlwaysOn
          </h1>
          <p className="text-xl sm:text-5xl open-sans-light">
            About the company
          </p>
        </div>
      </div>
      <div className="section-cy-2 flex justify-center items-center">
        <div className="flex flex-col justify-center text-left p-4 sm:p-12">
          <p className="text-md sm:text-4xl open-sans-light">
            <b>Our Story:</b> AlwaysOn was founded in 2021 with the mission to
            help schools provide better customer service to their communities.
            Since then, AlwaysOn has also expanded to support other types of
            local government organizations, including educational service
            agencies, cities, and state government agencies. Based in Newport
            Beach, California, we currently work with over 100 organizations
            nationwide.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-8 mt-6 sm:mt-12">
            <p className="text-md sm:text-3xl open-sans-light font-extrabold text-center">
              We are proud sponsor of:
            </p>
            <ul className="text-md sm:text-3xl open-sans-light flex flex-col sm:flex-row list-disc sm:space-x-12 mx-auto sm:p-4">
              <li>NSPRA</li>
              <li>CalSPRA</li>
              <li>COSPRA</li>
              <li>KanSPRA</li>
              <li>NebSPRA</li>
              <li>TSPRA</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;