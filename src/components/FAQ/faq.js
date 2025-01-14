import React, { useState } from "react";
import "./faq.css";
import logo2 from "../../assets/logo2.png";

const FAQ = () => {
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);
  const [openIndex3, setOpenIndex3] = useState(null);

  const faqs1 = [
    {
      question: "Do you collect any data or personal information?",
      answer:
        "Your data is yours. We do not collect, save, or sell the personal data and information (PII) of chatbot users."
    },
    {
      question: "Is your product WCAG/ADA compliant?",
      answer:
        "Yes, we follow the current Web Content Accessibility Guidelines (WCAG) and ADA standards. You can view our Voluntary Product Accessibility Template (VPAT) here."
    },
    {
      question: "Does your product work with screen readers?",
      answer:
        "Yes, our product is screen reader compatible and we have successfully tested with various screen readers."
    },
    {
      question: "Is your product secure to integrate and use?",
      answer:
        "Yes, our chatbot runs directly from our own servers, so there is no added security risk to having the chatbot on your website or in your mobile app. It does not require any direct integration with your systems or servers, and can be added to your website using our embed code (short script) and your mobile app using our iframe code."
    },
    {
      question: "How many languages does your chatbot support?",
      answer:
        "Currently, our chatbot can interact and translate in 30 languages: Amharic, Arabic, Chinese, English, Filipino, French, German, Guarani, Gujarati, Hebrew, Hindi, Hmong, Japanese, Korean, Macedonian, Malay, Mongolian, Pashto, Persian, Polish, Portuguese, Punjabi, Russian, Serbian, Somali, Spanish, Swahili, Turkish, Ukrainian, Vietnamese."
    }
  ];

  const faqs2 = [
    {
      question: "Do you offer free trials?",
      answer:
        "Yes, we offer 1-month free trials. We want to provide the opportunity to see the value and collect value data to help determine if AlwaysOn is a long term fit for your organization."
    },
    {
      question: "How does your pricing work?",
      answer:
        "Our pricing is based on your population and the license type you choose. Pricing is fixed on an annual basis. Contracts can be prorated in Year 1."
    },
    {
      question: "How long are your agreements?",
      answer:
        "Contracts are a minimum of one-year and multi-year contracts are available."
    },
    {
      question: "Do you offer discounts?",
      answer:
        "Yes, we offer discounts and can be flexible on pricing to make it work with your budget."
    }
  ];

  const faqs3 = [
    {
      question: "How is an AI chatbot different from a website search bar?",
      answer:
        "Website search provides static results entirely based on keywords, and your ability to modify or customize results is very limited. Our AI chatbot is conversational and intelligent in processing questions, does all the search/browsing work for you, and answers questions directly with sources. Our AI chatbot also learns and improves with every interaction, translates in 30+ languages, and provides insightful analytics that identify stakeholder needs and help you keep your website updated."
    },
    {
      question: "Can you have a chatbot and search bar on your website?",
      answer:
        "Yes, we always recommend keeping your search bar if you are considering a chatbot for your website. Your chatbot will likely become the primary way people navigate and engage with your website, but a search bar can still be a helpful and familiar alternative."
    }
  ];

  const toggleAccordion1 = (index) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };

  const toggleAccordion2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  const toggleAccordion3 = (index) => {
    setOpenIndex3(openIndex3 === index ? null : index);
  };

  return (
    <div className="faq alata-regular flex flex-col justify-evenly items-center border-t-2 border-black">
      <h1 className="text-3xl sm:text-6xl poppins-bold">
        Frequently Asked Questions
      </h1>
      <div className="relative sm:hidden flex justify-center items-center w-full bg-transparent">
        <div className="flex-grow h-0 border-t border-white"></div>
        <img className="h-16 mx-4 my-4" src={logo2} alt="AlwaysOn logo" />
        <div className="flex-grow h-0 border-t border-white"></div>
      </div>

      <div className="relative hidden sm:flex justify-center items-center w-full mt-6 mb-10">
        <div className="flex-grow h-0 border-t border-gray-400"></div>
        <img
          className="h-36 mx-4 fading"
          src="https://images.squarespace-cdn.com/content/v1/629ac7043144d551060fb16e/f1596228-5d17-4394-9577-a60d9424e097/logo_b%402x.png?format=1500w"
          alt="ALwaysOn logo"
        />
        <div className="flex-grow h-0 border-t border-gray-400"></div>
      </div>

      {/* Wrapper for all accordions */}
      <div className="flex flex-col gap-14 w-full">
        <div className="flex flex-col sm:flex-row justify-evenly">
          <h1 className="text-2xl sm:text-5xl poppins-bold text-left mb-2 sm:mb-0">
            Security & Accessibility:
          </h1>
          {/* First FAQ Accordion */}
          <div className="accordion w-full sm:w-1/2 open-sans-light text-lg sm:text-xl">
            {faqs1.map((faq, index) => (
              <div key={index} className="accordion-item">
                <div
                  className="accordion-header text-left"
                  onClick={() => toggleAccordion1(index)}
                >
                  <h1>{faq.question}</h1>
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

        <div className="flex flex-col sm:flex-row justify-evenly sm:mb-12">
          <h1 className="text-2xl sm:text-5xl poppins-bold justify-center mb-2 sm:mb-0">
            Partnerships & Pricing:
          </h1>
          {/* Second FAQ Accordion */}
          <div className="accordion w-full sm:w-1/2 open-sans-light text-lg sm:text-xl">
            {faqs2.map((faq, index) => (
              <div key={index} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion2(index)}
                >
                  <h1>{faq.question}</h1>
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

        <div className="flex-grow h-0 border-t border-gray-400"></div>

        <div className="flex flex-col sm:flex-row justify-evenly sm:mb-12 text-left">
          <h1 className="text-2xl sm:text-5xl poppins-bold justify-center mb-2 sm:mb-0 faq-header">
            <span>Information</span> Product:
          </h1>
          {/* Third FAQ Accordion */}
          <div className="accordion w-full sm:w-1/2 open-sans-light text-lg sm:text-xl">
            {faqs3.map((faq, index) => (
              <div key={index} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion3(index)}
                >
                  <h1>{faq.question}</h1>
                  <span>{openIndex3 === index ? "-" : "+"}</span>
                </div>
                {openIndex3 === index && (
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
