import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const faqs1 = [
    {
      question: "Do you collect any data or personal information?",
      answer:
        "Your data is yours. We do not collect, save, or sell the personal information of anyone who uses our product. We only collect general usage data, not personally identifiable information, which we make available to you through analytics."
    },
    {
      question: "Is your product WCAG compliant?",
      answer:
        "Yes, we follow the latest WCAG compliance guidelines and our chatbot is WCAG 2.0 AA compliant."
    },
    {
      question: "Does your product work with screen readers?",
      answer:
        "Yes, we have successfully tested our product with various screen readers and it is screen reader compatible."
    },
    {
      question: "Is your product secure to integrate and use?",
      answer:
        "Our chatbots can be added across your entire website or on specific pages with only a few lines of code (i.e., script). Most website providers have a simple embed feature that makes it easy to implement in a few minutes. We will work with you to embed correctly. There is no complex integration, and embedding our code on your website is completely safe and secure."
    }
  ];

  const faqs2 = [
    {
      question: "Do you offer free trials?",
      answer:
        "We offer 60-day free trials so that you can try AlwaysOn without any financial commitment. The goal is to give schools the opportunity to see the value and benefits through multiple months of engagement data. At the end of the trial, your school can make an informed decision about cancelling or moving forward."
    },
    {
      question: "How does your pricng work?",
      answer:
        "We give schools one all-in price for the year. This includes everything: usage, features, support, etc. Each school is offered unique annual pricing based on a number of factors, including: School Size, Number of Chatbots, Feature Options, etc.Our product is designed to be affordable. Pricing is a conversation and we try to be as flexible as possible to work within your budget."
    },
    {
      question: "How long are your agreements?",
      answer: "Our standard agreements are 1 year. If your agreement starts during a fiscal year in progress (not at the beginning/end), we offer prorated terms so that your agreement can renew in alignment with your fiscal year. We also offer multi-year agreements, which come with a discounted annual rate."
    },
    {
      question: "Do you offer discounts?",
      answer: "We offer a variety of discounts which are available on a case by case basis. The amounts and types of discounts are dependent on several factors, so available discounts may vary and change at any given time."
    }
  ];

  const toggleAccordion1 = (index) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };

  const toggleAccordion2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  return (
    <div className="faq alata-regular flex flex-col justify-evenly items-center">
      <h1 className="text-6xl poppins-bold">Frequently Asked Questions</h1>

      <div className="relative flex justify-center items-center w-full mt-6 mb-10">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 fading"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="Logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>

      {/* Wrapper for both accordions with flex-row class */}
      <div className="flex flex-col gap-14 w-full">
        <div className="flex flex-row justify-evenly">
          <h1 className="text-5xl poppins-bold text-left">
            Security & Accessibility:
          </h1>
          {/* First FAQ Accordion */}
          <div className="accordion w-1/2 open-sans-light">
            {faqs1.map((faq, index) => (
              <div key={index} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion1(index)}
                >
                  <h3>{faq.question}</h3>
                  <span>{openIndex1 === index ? "-" : "+"}</span>
                </div>
                {openIndex1 === index && (
                  <div className="accordion-body text-left">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-grow h-0 border-t border-gray-400"></div>

        {/* Second FAQ Accordion */}
        <div className="flex flex-row justify-evenly mb-12">
          <h1 className="text-5xl poppins-bold justify-center">
            {" "}
            Partnerships & Pricing:
          </h1>
          <div className="accordion w-1/2 open-sans-light">
            {faqs2.map((faq, index) => (
              <div key={index} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion2(index)}
                >
                  <h3>{faq.question}</h3>
                  <span>{openIndex2 === index ? "-" : "+"}</span>
                </div>
                {openIndex2 === index && (
                  <div className="accordion-body text-left">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
