import React from "react";
import { FlipWords } from "./FlipWords.js";

export function FlipWordsDemo() {
  const words = ["schools", "cities", "districts"];

  return (
      <div className="text-4xl open-sans-light leading-normal">
        A powerful customer service platform for
        <FlipWords words={words} /> <br />
        featuring AI chatbots + analytics
      </div>
  );
}
