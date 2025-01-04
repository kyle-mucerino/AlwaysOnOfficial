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
        Click a card to explore
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
                AlwaysOn Survey Tool: Flexible. Dynamic. Insightful. <br></br>
              </span>{" "}
              The AlwaysOn platform includes survey tool designed to help you
              collect quick and easy feedback from your community. Build pulse
              check surveys with ease, embed them in the chatbot, share via
              link, or deploy them in-person with a QR code or tablet. Create a
              new survey in minutes with custom questions, choose from various
              response types, and use conditional logic for tailored follow-ups.
              With built-in analytics, reviewing and acting on community
              feedback has never been simpler.
            </p>
            <button className="flex mt-8 mx-auto">
              <a
                href="/survey-tool"
                className=" text-white p-2 bg-blue-600 rounded-lg text-xl font-semibold"
              >
                Learn more about Survey Tool
              </a>
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
                AlwaysOn Contact Us Routing: Receive. Respond. Resolve.<br></br>
              </span>{" "}
              The AlwaysOn platform includes a
              Contact Us form that allows users to submit questions directly to
              staff through the chat bought. Questions are automatically routed
              to staff by choosing from a list of topics that your organization
              can fully customize. Staff receive questions via email, and staff
              email addresses are only revealed when they respond directly to
              the submitter. Additionally, all Contact Us submissions are logged
              in the chat bought analytics for easy tracking and review.
            </p>
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
                AlwaysOn Professional Services: Expertise. Support. Partnership.<br></br>
              </span>{" "}
              At AlwaysOn, we're committed to helping you get the most out of
              our platform without adding to your workload. Our Professional
              Services are included at no extra cost. We provide personalized
              customer service designed to help train your chatbot, review your
              data, and make recommendations for your website and content. From
              onboarding to ongoing success, we'll be by your side every step of
              the way.
            </p>
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