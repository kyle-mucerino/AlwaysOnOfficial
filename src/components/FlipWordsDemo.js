import React from "react";
import { FlipWords } from "./FlipWords.js";

export function FlipWordsDemo() {
  const words = ["schools", "cities", "districts"];

  return (
    <>
      <div className="hidden sm:block text-4xl saira-regular leading-normal">
        A powerful customer service platform for <br/>
        <FlipWords words={words} className="font-bold text-white" /> 
        featuring AI chatbots + analytics
      </div>
      <div className="block sm:hidden text-xl saira-regular leading-normal">
        A powerful customer service platform for 
        <FlipWords words={words} className="font-bold text-white" /> 
        featuring AI chatbots + analytics
      </div>
    </>
  );
}
