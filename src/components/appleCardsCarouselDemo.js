"use client";
// import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./appleCardsCarousel.js";
import logo3 from "../assets/logo3.png";
import { NavLink } from "react-router-dom";
import professional from "../assets/professional.gif";
import list from "../assets/list.gif";
import chat from "../assets/credit-score.gif";


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 poppins-bold uppercase">
        additional features of the AlwaysOn platform
      </h2>
      <h3 class="max-w-7xl mx-auto text-sm md:text-xl font-bold open-sans-light bg-orange-500 w-max rounded-lg p-1 text-white mt-2">
        Ready to explore? Click a card!
      </h3>

      <Carousel items={cards} />
    </div>
  );
}

const SurveyToolCard = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                AlwaysOn Survey Tool:
              </span>{" "}
              Flexible. Powerful. Insightful. The AlwaysOn platform includes a
              versatile survey tool designed for your needs. Customized
              questions, use conditional logic for tailored followups, and
              choose from various response types. With built in analytics,
              reviewing and acting on your data has never been simpler.
            </p>
            {/* <img
              src={logo3}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            /> */}
            <button className="flex mt-8 mx-auto">
              <a href="/survey-tool" className=" text-white p-2 bg-blue-600 rounded-lg text-xl font-semibold">Learn more about Survey Tool</a>
            </button>
          </div>
        );
      })}
    </>
  );
};

const ContactUsRoutingCard = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                AlwaysOn Contact Us Routing:
              </span>{" "}
              Questions. Delivered. Solved. The contact us form allows users to
              submit questions directly to staff through the chatbot. This
              ensures that staff email addresses remain private. Questions are
              automatically routed to the appropriate staff member based on the
              topic selected by the user. Topics are fully customizable to meet
              your needs. Staff receive questions via email and can respond
              directly to the submitter. Additionally, all contacted submissions
              are logged in the Chapond analytics for easy tracking and review.
            </p>
            {/* <img
              src={logo3}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            /> */}
            <button className="flex mt-8 mx-auto">
              <a
                href="/contact-us-routing"
                className=" text-white p-2 bg-blue-600 rounded-lg text-xl font-semibold"
              >
                Learn more about Contact Us Routing 
              </a>
            </button>
          </div>
        );
      })}
    </>
  );
};

const ProServicesCard = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                AlwaysOn Professional Services:
              </span>{" "}
              Expertise. Support. Partnership. At AlwaysOn we're committed to
              helping you get the most out of our platform without adding to
              your workload. Our professional services are included at no extra
              cost. Think of it as an offsite personal assistant to help meet
              the needs of you in your clients. We'll train your chatbot, review
              your data, and make personalized recommendations for your website
              and content. From onboarding to ongoing success, we'll be by your
              side every step of the way, ensuring you maximize the value of
              always on. Always on the next level of customer service excellent
            </p>
            {/* <img
              src={logo3}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            /> */}
            <button className="flex mt-8 mx-auto">
              <a
                href="/professional-services"
                className=" text-white p-2 bg-blue-600 rounded-lg text-xl font-semibold"
              >
                Learn more about Professional Services
              </a>
            </button>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "Survey Tool",
    src: chat,
    content: <SurveyToolCard />
  },

  {
    category: "",
    title: "Contact Us Routing",
    src: list,
    content: <ContactUsRoutingCard />
  },
  {
    category: "",
    title: "Professional Services",
    src: professional,
    content: <ProServicesCard />
  }
];