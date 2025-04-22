import React from "react";
import "../Company/company.css";
import logo2 from "../../assets/Apptegy AlwaysOn.png"

function Company() {
  return (
    <>
      <div className="section-cy-1 flex flex-row items-center border-y-2 border-black">
        <div className="flex flex-col text-left p-4 sm:p-12 my-4 sm:my-0">
          <img className="h-36 mx-4" src={logo2} alt="ALwaysOn logo" />
          <p className="text-xl sm:text-5xl open-sans-light">
            About the company
          </p>
        </div>
      </div>
      <div className="section-cy-2 flex justify-center items-center">
        <div className="flex flex-col justify-center text-left p-4 sm:p-12">
          <p className="text-md sm:text-4xl open-sans-light">
            In April 2025, Apptegy announced the acquisition of AlwaysOn. In
            less than 10 years, Apptegy has become a dominant communications
            platform for K-12 education, serving 5,000 districts nationwide with
            comprehensive brand and communications solutions. With the
            acquisition of AlwaysOn, Apptegy is furthering its ability to enable
            districts of all sizes to gather insights into how community members
            are interacting with their school and district websites. About
            AlwaysOn AlwaysOn was founded in 2021 with the mission to help
            schools provide better customer service to their communities. Since
            then, AlwaysOn has also expanded to support other types of local
            government organizations, including educational service agencies,
            cities, and state government agencies. Based in Newport Beach,
            California, serves over 100 organizations. About Apptegy Trusted by
            5,000 districts nationwide, Apptegy empowers school districts to
            elevate their brands while simplifying their communications
            strategies. The company's platform integrates district websites,
            mobile apps, notifications, and teacher-family communication tools
            into one cohesive system. With exceptional client support and
            intuitive solutions, Apptegy allows educators to focus on what
            matters most: educating, engaging, and growing their communities.
            Apptegy transforms how schools connect with their entire school
            community. Learn more at apptegy.com.
          </p>
          {/* <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-8 mt-6 sm:mt-12">
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Company;