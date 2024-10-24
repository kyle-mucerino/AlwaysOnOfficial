import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "Do you collect any data or personal information?",
      answer:
        "Your data is yours. We do not collect, save, or sell the personal information of anyone who uses our product. We only collect general usage data, not personally identifiable information, which we make available to you through analytics."
    },
    {
      question: "Is your product WCAG compliant?",
      answer:
        "Yes, we follow the latest WCAG compliance guidelines and our chatbot is WCAG 2.0 AA compliant. "
    },
    {
      question: "Does your product work with screen readers?",
      answer:
        "Yes, we have successfully tested our product with various screen readers and it is screen reader compatible."
    },
    {
      question: "Is your product secure to integrate and use?",
      answer:
        "Our chatbots can be added across your entire website or on specific pages with only a few lines of code (i.e. script). Most website providers have a simple embed feature that makes it easy to implement in a few minutes. We will work with you to embed correctly. There is no complex integration and embedding our code on your website is completely safe and secure."
    }
  ];

  // Toggle function for opening and closing an accordion item
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq alata-regular flex flex-col justify-evenly items-center">
      <h1 className="text-6xl">Frequently Asked Questions</h1>
      <div className="relative flex justify-center items-center w-full">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 fading"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="Logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>
      <div className="accordion w-1/2">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{faq.question}</h3>
              {/* Toggle icon or indicator */}
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
