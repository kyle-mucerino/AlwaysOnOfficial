import React from "react";
import { FlipWords } from "./FlipWords.js";

export function FlipWordsDemo() {
  const words = ["schools", "cities", "government"];

  return (
    <>
      <div className="hidden sm:block text-4xl saira-regular leading-normal">
        A customer service platform for 
        <FlipWords words={words} className="font-bold text-white" /> 
        <br></br>featuring AI chatbot + analytics
      </div>
      <div className="block sm:hidden text-2xl saira-regular leading-normal">
        A customer service platform for 
        <FlipWords words={words} className="font-bold text-white" /> 
        featuring AI chatbot + analytics
      </div>
    </>
  );
}
