import React, { useState } from "react";
import "./about.css";
import gif from "../../assets/homegif.gif";
import gif2 from "../../assets/school.gif";
import gif3 from "../../assets/students.gif";
import gif4 from "../../assets/education.gif";
import gif6 from "../../assets/bell.gif";
import gif7 from "../../assets/lesson.gif";
import gif8 from "../../assets/teacher.gif";
import gif9 from "../../assets/blackboard.gif";
import gif10 from "../../assets/teacher2.gif";

function About() {
  const [selectedBot, setSelectedBot] = useState("website"); // Default to "website" bot

  return (
    <>
      {/* SECTION 1 */}
      <div className="section section-01 flex">
        <div className="container">
          <div className="box" onClick={() => setSelectedBot("website")}>
            <span></span>
            <div className="content">
              <h2>Company</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/company">Read More</a>
            </div>
          </div>
          <div className="box" onClick={() => setSelectedBot("document")}>
            <span></span>
            <div className="content">
              <h2>Media & Materials</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/media">Read More</a>
            </div>
          </div>
          <div className="box" onClick={() => setSelectedBot("document")}>
            <span></span>
            <div className="content">
              <h2>FAQ</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/faq">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section section-02 flex flex-col items-center justify-center">
        {selectedBot === "website" && (
          <div className="website text-4xl alata-regular">
            A powerful AI chatbot in the center of a customer service platform
          </div>
        )}
        {selectedBot === "document" && (
          <div className="document text-4xl alata-regular">
            Document based internal chatbot
          </div>
        )}
      </div>

      {/* SECTION 3 */}
      <div className="section section-3">
        <div className="ag-format-container p-4">
          <div className="ag-courses_box saira-regular hidden custom:grid grid-cols-8">
            <div className="ag-courses_item col-start-1 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">School-Friendly AI</div>

                <div className="ag-courses-item_date-box">
                  Our AI is trained to be an expert in school questions and
                  topics right out of the box. <br />
                  <button className="btn info mt-4 font-black" aria-label="Learn More about School-Friendly AI">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
            <div className="col-start-5 col-span-1 my-auto">
              <img src={gif2} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="col-start-7 col-span-1 my-auto">
              <img src={gif3} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="ag-courses_item col-start-2 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Answer Quality Tools
                </div>

                <div className="ag-courses-item_date-box">
                  Custom FAQs (not required), AI website training, and answer
                  feedback help improve chatbot answers. <br />
                  <button className="btn info mt-4 font-black" aria-label="Learn More about Answer Quality Tools">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
            <div className="col-start-6 col-span-1 my-auto">
              <img src={gif7} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="col-start-8 col-span-1 my-auto">
              <img src={gif4} alt="school gif" className="rounded-3xl" />
            </div>

            {/* <div className="col-start-2 col-span-1 my-auto">
      <i className="fa-solid fa-bolt text-9xl">
        <span className="sr-only">Lightning Bolt</span>
      </i>
    </div> */}

            <div className="ag-courses_item col-start-3 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Contact Us Routing</div>

                <div className="ag-courses-item_date-box">
                  Route questions to specific staff members (if person is
                  needed) based on topic. <br />
                  <button className="btn info mt-4 font-black" aria-label="Learn More about Contact Us Routing">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
            <div className="col-start-7 col-span-1 my-auto">
              <img src={gif6} alt="school gif" className="rounded-3xl" />
            </div>

            {/* <div className="col-start-1 col-span-1 my-auto">
      <img src={gif7} alt="school gif" className="rounded-3xl" />
    </div> */}
            <div className="col-start-2 col-span-1 my-auto">
              <img src={gif8} alt="school gif" className="rounded-3xl" />
            </div>

            <div className="ag-courses_item col-start-4 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Language Translation
                </div>

                <div className="ag-courses-item_date-box">
                  English, Spanish, and 10 other languages available. More
                  coming soon! <br />
                  <button className="btn info mt-4 font-black" aria-label="Learn More about Language Translation">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
            {/* <div className="col-start-7 col-span-1 my-auto justify-self-end">
      <i className="fa-solid fa-bolt text-9xl">
        <span className="sr-only">Lightning Bolt</span>
      </i>
    </div> */}

            <div className="col-start-1 col-span-1 my-auto">
              <img src={gif9} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="col-start-3 col-span-1 my-auto">
              <img src={gif10} alt="school gif" className="rounded-3xl" />
            </div>

            <div className="ag-courses_item col-start-5 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">Analytics</div>

                <div className="ag-courses-item_date-box">
                  Question level data that gives you a real time passive focus
                  group and measurement of stakeholder needs. <br />
                  <button className="btn info mt-4 font-black" aria-label="Learn More about Analytics">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>

            <div className="col-start-2 col-span-1 my-auto">
              <img src={gif2} alt="school gif" className="rounded-3xl" />
            </div>
            <div className="col-start-4 col-span-1 my-auto">
              <img src={gif4} alt="school gif" className="rounded-3xl" />
            </div>

            <div className="ag-courses_item col-start-6 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Use Multiple Chatbots
                </div>

                <div className="ag-courses-item_date-box">
                  Districts can build unlimited chatbots, from district-wide to
                  school site or topic specific. <br />
                  <button className="btn info mt-4 font-black" aria-label="Learn More about Use Multiple Chatbots">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GIF SPEECH BUBBLE */}
      <div className="flex flex-row justify-center my-8">
        <div>
          <img src={gif} alt="gif" className="gif rounded-lg" />
        </div>
        <p className="bubble left alata-regular text-2xl w-1/5 self-center">
          See the Chat Bot in action!
        </p>
      </div>

      {/* SPEECH BUBBLES WHITE/BLACK */}
      <div className="section">
        <div className="hidden custom:flex flex-row justify-evenly items-center">
          <div className="flex flex-col w-1/3">
            <h1 className="text-4xl alata-regular speech-bubble2">
              Why AI Chatbots?{" "}
              <i className="fa-solid fa-robot text-4xl">
                <span className="sr-only">robot</span>
              </i>{" "}
            </h1>
            <p className="text-2xl saira-regular speech-bubble2">
              AI chatbots improve website efficiency by providing instant and
              personalized responses, reducing manual support efforts, and
              enhancing the user experience.
            </p>
          </div>
          <div className="flex flex-col w-1/3">
            <h1 className="text-4xl alata-regular speech-bubble-right2 mb-12">
              Why AlwaysOn?{" "}
              <i className="fa-solid fa-bolt">
                <span className="sr-only">Lightning Bolt</span>
              </i>
            </h1>
            <p className="text-2xl saira-regular speech-bubble-right2 mt-12">
              Education is what we do! At AlwaysOn our mission is to help
              stakeholders on your school webstie get answers, find information,
              and feel supported <b>24/7/365</b>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
