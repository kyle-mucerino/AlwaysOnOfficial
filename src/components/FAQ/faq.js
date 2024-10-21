import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "How does useState work?",
      answer:
        "useState is a React hook that lets you add state to a functional component."
    },
    {
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It allows us to write HTML in React."
    },
    {
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a lightweight representation of the real DOM, allowing React to update the UI efficiently."
    },
    {
      question: "How do I pass data between components?",
      answer: "You can pass data from parent to child components using props."
    }
  ];

  // Toggle function for opening and closing an accordion item
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq alata-regular flex flex-col justify-evenly items-center">
      <h1 className="text-6xl">Frequently Asked Questions</h1>
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
