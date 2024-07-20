import React, {useState} from "react";
import "./platform.css";
import { ReactComponent as Map } from "../../assets/map2.svg";
import gif from "../../assets/homegif.gif";
import gif2 from "../../assets/school.gif";
import gif3 from "../../assets/students.gif";
import gif4 from "../../assets/education.gif";
import gif5 from "../../assets/secretary.gif";
import gif6 from "../../assets/bell.gif";
import gif7 from "../../assets/lesson.gif";
import gif8 from "../../assets/teacher.gif";
import gif9 from "../../assets/blackboard.gif";
import gif10 from "../../assets/teacher2.gif";


function Platform() {

  const [selectedImage, setSelectedImage] = useState("image1");

  const images = {
    image1: gif2,
    image2: gif3,
    image3: gif4,
    image4: gif5
  };

  const [selectedImage2, setSelectedImage2] = useState("image5");

  const images2 = {
    image5: gif6,
    image6: gif7,
    image7: gif8,
    image8: gif9
  };

  return (
    <>
      {/* SECTION 1 */}
      <div className="section section-1 flex flex-col">
        <div className="flex flex-col mx-auto justify-evenly text-center mt-8">
          <div className="headline mb-4">
            <h1 className="text-7xl alata-regular">
              AlwaysOn{" "}
              <i className="fa-solid fa-bolt">
                <span className="sr-only">Lightning Bolt</span>
              </i>
            </h1>
          </div>
          <div>
            <p className="text-2xl saira-medium">
              AI powered customer service platform for schools & districts
            </p>
          </div>
          <div className="free-trial my-6">
            <button className="border-2 border-white bg-white text-black rounded-lg p-4 freeman-regular uppercase mx-4">
              <span>Get started today</span>
            </button>
          </div>
          <div className="mb-4">
            <p className="alata-regular text-3xl">
              100+ schools & districts in 13 states enhance their schools online
              presence with AlwaysOn
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center my-8">
          <div>
            <img src={gif} alt="gif" className="gif rounded-lg" />
          </div>
          <p className="bubble left alata-regular text-2xl w-1/5 self-center">
            See the Chat Bot in action!
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section section-2">
        <div className="flex flex-row justify-evenly items-center p-8">
          <div className="flex flex-col w-1/3">
            <h1 className="text-4xl alata-regular speech-bubble2 mb-12">
              Why AI Chatbots?{" "}
              <i className="fa-solid fa-robot text-4xl">
                <span className="sr-only">robot</span>
              </i>{" "}
            </h1>
            <p className="text-2xl saira-regular speech-bubble2 mt-12">
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

      {/* SECTION 3 */}

      <div className="section section-3">
        <div className="ag-format-container p-4">
          <div className="ag-courses_box saira-regular grid grid-cols-8">
            <div className="ag-courses_item col-start-1 col-span-3">
              <a href="/features" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">School-Friendly AI</div>

                <div className="ag-courses-item_date-box">
                  Our AI is trained to be an expert in school questions and
                  topics right out of the box. <br />
                  <button className="btn info mt-4 font-black">
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
                  <button className="btn info mt-4 font-black">
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
                  <button className="btn info mt-4 font-black">
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
                  <button className="btn info mt-4 font-black">
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
                  <button className="btn info mt-4 font-black">
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
                  <button className="btn info mt-4 font-black">
                    Learn More&rarr;
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="section section-4 flex flex-col">
        <div className="flex flex-row p-8">
          <div className="flex w-1/2">
            <figure className="implement">
              <img
                className="w-5/6 mx-auto"
                src={images[selectedImage]}
                alt="gif"
              />
            </figure>
          </div>
          <div className="flex items-center w-1/2">
            <div className="flex flex-col">
              <h1 className="text-5xl font-extrabold alata-regular">
                Survey Tool
              </h1>
              <h2 className="text-3xl font-extrabold alata-regular my-4">
                Capture Feedback
              </h2>
              <p className="text-3xl saira-regular">
                In addition to the ChatBot, AlwaysOn's extensive Survey Tool
                will give you further insights into the questions and comments
                most prevalent on your school's website.
              </p>
              <div className="mt-4 flex">
                <button
                  className="text-3xl saira-regular button-shadow"
                  onClick={() => setSelectedImage("image1")}
                >
                  Feature 1
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image2")}
                >
                  Feature 2
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image3")}
                >
                  Feature 3
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage("image4")}
                >
                  Feature 4
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse p-8">
          <div className="flex w-1/2">
            <figure className="pro">
              <img
                className="w-5/6 mx-auto"
                src={images2[selectedImage2]}
                alt="pro"
              />
            </figure>
          </div>
          <div className="flex items-center w-1/2">
            <div className="flex flex-col">
              <h1 className="text-5xl font-extrabold alata-regular">
                Survey Tool
              </h1>
              <h2 className="text-3xl font-extrabold alata-regular my-4">
                Capture Feedback
              </h2>
              <p className="text-3xl saira-regular">
                In addition to the ChatBot, AlwaysOn's extensive Survey Tool
                will give you further insights into the questions and comments
                most prevalent on your school's website.
              </p>
              <div className="mt-4 flex">
                <button
                  className="text-3xl saira-regular button-shadow"
                  onClick={() => setSelectedImage2("image5")}
                >
                  Feature 1
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage2("image6")}
                >
                  Feature 2
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage2("image7")}
                >
                  Feature 3
                </button>
                <button
                  className="text-3xl saira-regular button-shadow ml-4"
                  onClick={() => setSelectedImage2("image8")}
                >
                  Feature 4
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="section section-5 flex flex-col">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold alata-regular">Our Clients</h1>
          <p className="text-3xl italic mt-2">
            AlwaysOn is in 13 states and expanding across the nation!
          </p>
        </div>
        <div className="flex flex-row text-center">
          <div className="flex flex-col mt-4 w-1/2 mx-auto">
            <div className="flex flex-col my-12">
              <Map />
              <div className="flex flex-row mt-8 italic">
                <a href="https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg">
                  Heitordp
                </a>
                , CC0, via Wikimedia Commons
              </div>
            </div>
          </div>
          <div className="sm:grid grid-cols-1 mx-auto my-auto hidden">
            <ul className="saira-regular text-2xl">
              <li>California</li>
              <li>Texas</li>
              <li>Michigan</li>
              <li>Wisconsin</li>
              <li>Illinois</li>
              <li>Oklahoma</li>
              <li>Kansas</li>
              <li>New York</li>
              <li>Pennsylvania</li>
              <li>Indiana</li>
              <li>Washington</li>
              <li>Colorado</li>
              <li>New Jersey</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 6 */}
      <div className="section section-6 flex flex-col">
        <div className="text-center p-2">
          <h1 className="text-7xl alata-regular">Testimonials</h1>
          <p className="text-3xl italic mt-4 text-center">
            100+ schools & districts in 13 states enhance their schools online
            presence with AlwaysOn
          </p>
        </div>
        <div className="testimonials flex flex-row p-8 justify-center">
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  If you do the job badly enough, sometimes you don't get asked
                  to do it again.
                </p>
              </blockquote>
              <h3>Wisteria Ravenclaw</h3>
              <h4>Google Inc.</h4>
            </figcaption>
          </figure>
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  I'm killing time while I wait for life to shower me with
                  meaning and happiness.
                </p>
              </blockquote>
              <h3>Ursula Gurnmeister</h3>
              <h4>Facebook</h4>
            </figcaption>
          </figure>
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p>
                  The only skills I have the patience to learn are those that
                  have no real application in life.{" "}
                </p>
              </blockquote>
              <h3>Ingredia Nutrisha</h3>
              <h4>Twitter</h4>
            </figcaption>
          </figure>
        </div>
        <div className="content-container-1 text-center">
          <h1 className="text-6xl alata-regular p-12">
            See all you can accomplish with AlwaysOn
          </h1>
          <div className="free-trial flex-row">
            <button className="border-2 border-white bg-white text-black rounded-lg p-4 freeman-regular uppercase mx-4">
              <span>Get started</span>
            </button>
            <button className="border-2 border-white bg-white text-black rounded-lg p-4 freeman-regular uppercase">
              <span>contact us</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;