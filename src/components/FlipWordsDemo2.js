import React from "react";
import { FlipWords } from "./FlipWords.js";

export function FlipWordsDemo() {
  const words = ["can be launched within 24 hours", "is trained only on your information", "is available in 30+ languages", "improves with every interaction"];

  return (
    <div className="text-4xl open-sans-light leading-normal font-bold text-white">
      The AlwaysOn chatbot{" "}
      <FlipWords words={words} className="font-bold text-orange-500" /> 
    </div>
  );
}
